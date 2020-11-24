import {ArticleService} from './shop/articles/article.service';
import {ProviderService} from './shop/providers/provider.service';
import {SharedProviderService} from './shop/shared/services/shared.provider.service';
import {SharedArticleService} from './shop/shared/services/shared.article.service';
import {SharedCashierService} from './shop/shared/services/shared.cashier.service';
import {ShoppingCartService} from './shop/cashier-opened/shopping-cart/shopping-cart.service';
import {CashierClosureService} from './shop/cashier-opened/cashier-closure/cashier-closure.service';

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
