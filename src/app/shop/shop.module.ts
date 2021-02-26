import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';

import {CashierClosureService} from './cashier-opened/cashier-closure/cashier-closure.service';
import {ProviderService} from './providers/provider.service';
import {SharedArticleService} from './shared/services/shared.article.service';
import {SharedCashierService} from './shared/services/shared.cashier.service';
import {SharedProviderService} from './shared/services/shared.provider.service';
import {ShoppingCartService} from './cashier-opened/shopping-cart/shopping-cart.service';
import {ArticlesComponent} from './articles/articles.component';
import {CashierClosedComponent} from './cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './cashier-opened/cashier-opened.component';
import {ShopComponent} from './shop.component';
import {ProvidersComponent} from './providers/providers.component';
import {SearchByBarcodeComponent} from './shared/search-by-barcode.component';
import {SearchByCompanyComponent} from './shared/search-by-company.component';
import {AddCreditLineDialogComponent} from './shared/dialogs/add-credit-line-dialog.component';
import {ShoppingCartComponent} from './cashier-opened/shopping-cart/shopping-cart.component';
import {ArticleCreationUpdatingDialogComponent} from './articles/article-creation-updating-dialog.component';
import {ArticleQuickCreationDialogComponent} from './cashier-opened/shopping-cart/article-quick-creation-dialog.component';
import {CashierDialogComponent} from './cashier-opened/cashier-closure/cashier-dialog.component';
import {CheckOutDialogComponent} from './cashier-opened/shopping-cart/check-out-dialog.component';
import {ProviderCreationUpdatingDialogComponent} from './providers/provider-creation-updating-dialog.component';
import {ArticleService} from './articles/article.service';
import {ShopRoutingModule} from './shop-routing.module';
import {TicketsComponent} from './cashier-opened/tickets/tickets.component';
import {OffersComponent} from './offers/offers.component';
import {OfferCreationUpdatingDialogComponent} from './offers/offer-creation-updating-dialog.component';
import {ArticlesFamilyComponent} from './articles-family/articles-family/articles-family.component';
import {ArticleFamilyViewComponent} from './cashier-opened/shopping-cart/article-family-view/article-family-view.component';
import {StockAlarmsComponent} from './stock-alarms/stock-alarms.component';
import {UsersComponent} from './users/users.component';
import {SharedOfferService} from './shared/services/shared.offer.service';
import {CreditLinePayDialogComponent} from './cashier-opened/credit-line-pay-dialog.component';

@NgModule({
  declarations: [
    AddCreditLineDialogComponent,
    ArticleCreationUpdatingDialogComponent,
    ArticlesFamilyComponent,
    ArticleFamilyViewComponent,
    ArticleQuickCreationDialogComponent,
    ArticlesComponent,
    CashierClosedComponent,
    CashierDialogComponent,
    CashierOpenedComponent,
    CheckOutDialogComponent,
    CreditLinePayDialogComponent,
    ProviderCreationUpdatingDialogComponent,
    ProvidersComponent,
    SearchByBarcodeComponent,
    SearchByCompanyComponent,
    ShopComponent,
    ShoppingCartComponent,
    TicketsComponent,
    OffersComponent,
    OfferCreationUpdatingDialogComponent,
    StockAlarmsComponent,
    UsersComponent,
  ],
  entryComponents: [
    ArticleCreationUpdatingDialogComponent,
    ArticleQuickCreationDialogComponent,
    CashierDialogComponent,
    CheckOutDialogComponent,
    ProviderCreationUpdatingDialogComponent,
  ],
  imports: [
    SharedModule,
    ShopRoutingModule,
  ],
  providers: [
    ArticleService,
    CashierClosureService,
    ProviderService,
    SharedArticleService,
    SharedCashierService,
    SharedOfferService,
    SharedProviderService,
    ShoppingCartService,
  ],
})
export class ShopModule {
}
