import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Offer} from './offer.model';
import {OfferService} from './offer.service';
import {SharedArticleService} from '../shared/services/shared.article.service';
import {Article} from '../shared/services/models/article.model';

@Component({
  templateUrl: './offer-creation-updating-dialog.component.html',
  styleUrls: ['./offer-dialog.component.css']
})

export class OfferCreationUpdatingDialogComponent {

  offer: Offer;
  title: string;
  oldOffer: string;
  articles: Article[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) data: Offer, private offerService: OfferService,
              private sharedArticleService: SharedArticleService, private dialog: MatDialog) {
    this.title = data ? 'Update Offer' : 'Create Offer';
    this.offer = data ? data : {
      reference: undefined, description: undefined, creationDate: new Date(Date.now()),
      expiryDate: undefined, discount: undefined, articles: this.articles
    };
    this.oldOffer = data ? data.reference : undefined;
  }

  isCreate(): boolean {
    return this.oldOffer === undefined;
  }

  addBarcode(barcode): void {
    this.sharedArticleService
      .read(barcode)
      .subscribe(article => {
        this.articles.push(article);
        console.log('article ' + this.articles);
      });
  }

  create(): void {
    this.offerService
      .create(this.offer)
      .subscribe(() => this.dialog.closeAll());
  }

  update(): void {
    this.offerService
      .update(this.oldOffer, this.offer)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.offer.reference) || this.check(this.offer.description)
      || this.check(this.offer.expiryDate.toString()) || this.check(this.offer.discount.toString());
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
