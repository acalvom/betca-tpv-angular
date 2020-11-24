import {ArticlesComponent} from './shop/articles/articles.component';
import {CashierClosedComponent} from './shop/cashier-closed/cashier-closed.component';
import {HomeComponent} from './shop/home.component';
import {ProvidersComponent} from './shop/providers/providers.component';
import {WelcomeComponent} from './home/welcome.component';
import {ArticleCreationUpdatingDialogComponent} from './shop/articles/article-creation-updating-dialog.component';
import {ProviderCreationUpdatingDialogComponent} from './shop/providers/provider-creation-updating-dialog.component';
import {CashierOpenedComponent} from './shop/cashier-opened/cashier-opened.component';
import {CashierDialogComponent} from './shop/cashier-opened/cashier-closure/cashier-dialog.component';
import {ArticleQuickCreationDialogComponent} from './shop/cashier-opened/shopping-cart/article-quick-creation-dialog.component';
import {CheckOutDialogComponent} from './shop/cashier-opened/shopping-cart/check-out-dialog.component';
import {ShoppingCartComponent} from './shop/cashier-opened/shopping-cart/shopping-cart.component';
import {SearchByCompanyComponent} from './shop/shared/search-by-company.component';
import {SearchByBarcodeComponent} from './shop/shared/search-by-barcode.component';

export class AppComponents {
  static COMPONENTS = [
    ArticlesComponent,
    CashierClosedComponent,
    CashierOpenedComponent,
    HomeComponent,
    ProvidersComponent,
    SearchByBarcodeComponent,
    SearchByCompanyComponent,
    ShoppingCartComponent,
    WelcomeComponent,
  ];

  static DIALOGS = [
    ArticleCreationUpdatingDialogComponent,
    ArticleQuickCreationDialogComponent,
    CashierDialogComponent,
    CheckOutDialogComponent,
    ProviderCreationUpdatingDialogComponent,
  ];
}
