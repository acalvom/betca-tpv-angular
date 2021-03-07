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
import {ProfileSettingsComponent} from '@shared/components/profile-settings/profile-settings.component';
import {StockAuditComponent} from './stock-audit/stock-audit.component';
import {ProviderInvoicesComponent} from './provider-invoices/provider-invoices.component';
import {CustomerDiscountComponent} from './customer-discount/customer-discount.component';
import {CashierClosureComponent} from './cashier-opened/cashier-closure/cashier-closure.component';
import {UsersManagementComponent} from './users/components/users-management.component';
import {MessengerComponent} from './messenger/messenger.component';
import {SalesPeopleComponent} from './salespeople/salespeople.component';
import {IssuesComponent} from './issues/issues.component';
import {InvoicesComponent} from './invoices/invoices.component';
import {ProviderOrdersComponent} from './provider-orders/provider-orders.component';
import {ComplaintsShopComponent} from "./complaints-shop/complaints-shop.component";
import {StaffComponent} from './staff/staff.component';

const routes: Routes = [
  {
    path: '', // 'shop' to forRoot
    component: ShopComponent,
    canActivate: [RoleGuardService],
    data: {roles: [Role.ADMIN, Role.MANAGER, Role.OPERATOR]},
    children: [ // or path: 'shop/articles'
      {path: 'articles', component: ArticlesComponent},
      {path: 'cashier-closed', component: CashierClosedComponent},
      {path: 'cashier-opened', component: CashierOpenedComponent},
      {path: 'cashier-closure', component: CashierClosureComponent},
      {path: 'offers', component: OffersComponent},
      {path: 'providers', component: ProvidersComponent},
      {path: 'complaints', component: ComplaintsShopComponent},
      {path: 'stock-alarms', component: StockAlarmsComponent},
      {path: 'tickets', component: TicketsComponent},
      {path: 'invoices', component: InvoicesComponent},
      {path: 'articles-family', component: ArticlesFamilyComponent},
      {path: 'provider-invoices', component: ProviderInvoicesComponent},
      {path: 'users', component: UsersManagementComponent},
      {path: 'stock-audit', component: StockAuditComponent},
      {path: 'profile', component: ProfileSettingsComponent},
      {path: 'customer-discount', component: CustomerDiscountComponent},
      {path: 'salespeople', component: SalesPeopleComponent},
      {path: 'issues', component: IssuesComponent},
      {path: 'messenger', component: MessengerComponent},
      {path: 'salespeople', component: SalesPeopleComponent},
      {path: 'staff', component: StaffComponent},
      {path: 'provider-orders', component: ProviderOrdersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
