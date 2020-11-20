import {ArticleService} from './home/articles/article.service';
import {ProviderService} from './home/providers/provider.service';
import {SharedProviderService} from './home/shared/services/shared.provider.service';
import {SharedArticleService} from './home/shared/services/shared.article.service';
import {SharedCashierService} from './home/shared/services/shared.cashier.service';
import {ShoppingCartService} from './home/cashier-opened/shopping-cart/shopping-cart.service';
import {CashierClosureService} from './home/cashier-opened/cashier-closure/cashier-closure.service';

export class AppServices {
  public static SERVICES = [
    ArticleService,
    CashierClosureService,
    ProviderService,
    SharedArticleService,
    SharedCashierService,
    SharedProviderService,
    ShoppingCartService,
  ];
}
