import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from '@core/role.model';
import {RoleGuardService} from '@core/role-guard.service';
import {ArticlesComponent} from './articles/articles.component';
import {CashierClosedComponent} from './cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './cashier-opened/cashier-opened.component';
import {ProvidersComponent} from './providers/providers.component';
import {ShopComponent} from './shop.component';
import {StockAlarmsComponent} from './stock-alarms/stock-alarms.component';
import {TicketsComponent} from './cashier-opened/tickets/tickets.component';
import {OffersComponent} from './offers/offers.component';
import {ArticlesFamilyComponent} from './articles-family/articles-family/articles-family.component';
import {UsersComponent} from './users/users.component';
import {CashierClosureComponent} from './cashier-opened/cashier-closure/cashier-closure.component';

const routes: Routes = [
  {
    path: '', // 'shop' to forRoot
    component: ShopComponent,
    canActivate: [RoleGuardService],
    data: {roles: [Role.ADMIN, Role.MANAGER, Role.OPERATOR]},
    children: [ // or path: 'shop/articles'
      {path: 'articles', component: ArticlesComponent},
      {path: 'cashier-closed', component: CashierClosedComponent},
      {path: 'cashier-closure', component: CashierClosureComponent},
      {path: 'cashier-opened', component: CashierOpenedComponent},
      {path: 'offers', component: OffersComponent},
      {path: 'providers', component: ProvidersComponent},
      {path: 'stock-alarms', component: StockAlarmsComponent},
      {path: 'tickets', component: TicketsComponent},
      {path: 'articles-family', component: ArticlesFamilyComponent},
      {path: 'users', component: UsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
