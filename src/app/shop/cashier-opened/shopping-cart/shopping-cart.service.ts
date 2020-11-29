import {Injectable} from '@angular/core';
import {BehaviorSubject, EMPTY, iif, merge, Observable, Subject} from 'rxjs';
import {catchError, concatMap, map} from 'rxjs/operators';

import {HttpService} from '@core/http.service';
import {SharedArticleService} from '../../shared/services/shared.article.service';
import {Article} from '../../shared/services/models/article.model';
import {Shopping} from './shopping.model';
import {TicketCreation} from './ticket-creation.model';

import {ArticleQuickCreationDialogComponent} from './article-quick-creation-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {environment} from '@env';
import {ShoppingState} from './shopping-state.model';

@Injectable()
export class ShoppingCartService {
  static END_POINT = environment.REST_CORE + '/tickets';
  static RECEIPT = '/receipt';

  static ARTICLE_VARIOUS = '1';
  static SHOPPING_CART_NUM = 4;

  private indexShoppingCart = 0;
  private shoppingCart: Array<Shopping>;
  private totalShoppingCart = 0;
  private shoppingCartList: Array<Array<Shopping>> = [];
  private shoppingCartSubject: Subject<Shopping[]> = new BehaviorSubject(undefined); // refresh auto
  private lastArticle: Article;

  constructor(private dialog: MatDialog, private articleService: SharedArticleService, private httpService: HttpService) {
    for (let i = 0; i < ShoppingCartService.SHOPPING_CART_NUM; i++) {
      this.shoppingCartList.push([]);
    }
    this.shoppingCart = this.shoppingCartList[this.indexShoppingCart];
  }

  static isArticleVarious(code: string): boolean {
    return code === ShoppingCartService.ARTICLE_VARIOUS;
  }

  shoppingCartObservable(): Observable<Shopping[]> {
    return this.shoppingCartSubject.asObservable();
  }

  getIndexShoppingCart(): number {
    return this.indexShoppingCart + 1;
  }

  getTotalShoppingCart(): number {
    return this.totalShoppingCart;
  }

  getLastArticle(): Article {
    return this.lastArticle;
  }

  synchronizeCartTotal(): void {
    let total = 0;
    for (const shopping of this.shoppingCart) {
      total = total + shopping.total;
    }
    this.totalShoppingCart = Math.round(total * 100) / 100;
  }

  getTotalCommitted(): number {
    let total = 0;
    for (const shopping of this.shoppingCart) {
      if (shopping.state) {
        total += shopping.total;
      }
    }
    return Math.round(total * 100) / 100;
  }

  unCommitArticlesExist(): boolean {
    for (const shopping of this.shoppingCart) {
      if (!shopping.state && shopping.amount > 0) {
        return true;
      }
    }
    return false;
  }

  delete(shopping: Shopping): void {
    const index = this.shoppingCart.indexOf(shopping);
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
    }
    this.synchronizeAll();
  }

  add(codeValue: string): Observable<any> {
    let price: number = Number(codeValue.replace(',', '.'));
    if (!Number.isNaN(price) && codeValue.length <= 5) {
      codeValue = ShoppingCartService.ARTICLE_VARIOUS;
    } else {
      price = undefined;
    }
    return this.articleService.read(codeValue).pipe(
      map(
        (article: Article) => {
          this.addArticle(article, price);
        }), catchError(() => {
        const dialogRef = this.dialog.open(ArticleQuickCreationDialogComponent);
        dialogRef.componentInstance.article = {
          barcode: codeValue,
          description: undefined,
          retailPrice: undefined,
          providerCompany: undefined
        };
        dialogRef.afterClosed().subscribe(
          newArticle => {
            if (newArticle) {
              this.addArticle(newArticle);
            }
          }
        );
        return EMPTY;
      })
    );
  }

  exchange(): void {
    this.shoppingCartList[this.indexShoppingCart++] = this.shoppingCart;
    this.indexShoppingCart %= ShoppingCartService.SHOPPING_CART_NUM;
    this.shoppingCart = this.shoppingCartList[this.indexShoppingCart];
    this.synchronizeAll();
  }

  createTicketAndPrintReceipts(ticketCreation: TicketCreation, voucher: number,
                               requestedInvoice: boolean,
                               requestedGiftTicket: boolean,
                               requestDataProtectionAct: boolean): Observable<any> {
    ticketCreation.shoppingList = this.shoppingCart;
    return this.httpService.post(ShoppingCartService.END_POINT, ticketCreation).pipe(
      concatMap(ticket => {
        this.reset();
        let receipts = this.httpService.pdf().get(ShoppingCartService.END_POINT + '/' + ticket.id + ShoppingCartService.RECEIPT);
        receipts = iif(() => voucher > 0, merge(receipts, EMPTY), receipts); // TODO change EMPTY to create voucher
        receipts = iif(() => requestedInvoice, merge(receipts, EMPTY), receipts); // TODO change EMPTY to create invoice
        receipts = iif(() => requestedGiftTicket, merge(receipts, EMPTY), receipts); // TODO change EMPTY to create gift ticket
        receipts = iif(() => requestDataProtectionAct, merge(receipts, EMPTY), receipts); // TODO change EMPTY to create gift ticket
        return receipts;
      })
    );
  }

  isEmpty(): boolean {
    return (!this.shoppingCart || this.shoppingCart.length === 0);
  }

  private addArticle(article: Article, price?: number): void {
    const shopping = new Shopping(article.barcode, article.description, article.retailPrice);
    if (article.stock < 1) {
      shopping.state = ShoppingState.NOT_COMMITTED;
    }
    this.shoppingCart.push(shopping);
    this.lastArticle = article;
    if (price) {
      shopping.total = price;
      shopping.updateDiscount();
    }
    this.synchronizeAll();
  }

  private reset(): void {
    this.shoppingCart = [];
    this.synchronizeAll();
  }

  private synchronizeAll(): void {
    this.shoppingCartSubject.next(this.shoppingCart);
    this.synchronizeCartTotal();
  }

}
