import {ArticlesComponent} from './home/articles/articles.component';
import {CashierClosedComponent} from './home/cashier-closed/cashier-closed.component';
import {HomeComponent} from './home/home.component';
import {ProvidersComponent} from './home/providers/providers.component';
import {WelcomeComponent} from './welcome.component';
import {ArticleCreationUpdatingDialogComponent} from './home/articles/article-creation-updating-dialog.component';
import {ProviderCreationUpdatingDialogComponent} from './home/providers/provider-creation-updating-dialog.component';
import {CashierOpenedComponent} from './home/cashier-opened/cashier-opened.component';
import {CashierDialogComponent} from './home/cashier-opened/cashier-closure/cashier-dialog.component';
import {ArticleQuickCreationDialogComponent} from './home/cashier-opened/shopping-cart/article-quick-creation-dialog.component';
import {CheckOutDialogComponent} from './home/cashier-opened/shopping-cart/check-out-dialog.component';
import {ShoppingCartComponent} from './home/cashier-opened/shopping-cart/shopping-cart.component';

export class AppComponents {
  static COMPONENTS = [
    ArticlesComponent,
    CashierClosedComponent,
    CashierOpenedComponent,
    HomeComponent,
    ProvidersComponent,
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
