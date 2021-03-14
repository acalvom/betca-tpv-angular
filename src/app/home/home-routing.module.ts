import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from '@core/role.model';
import {RoleGuardService} from '@core/role-guard.service';
import {AdviserComponent} from './adviser/adviser.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {HomeComponent} from './home.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {TicketTrackingComponent} from './ticket-tracking/ticket-tracking.component';
import {Top5Component} from './top5/top5.component';
import {OffersComponent} from './offers/offers.component';
import {ShoppingBasketComponent} from './shopping-basket/shopping-basket.component';
import {ProfileSettingsComponent} from '@shared/components/profile-settings/profile-settings.component';
import {StockManagementComponent} from './stock-management/stock-management.component';
import {NewsComponent} from './adviser/news/news.component';
import {PopularComponent} from './adviser/popular/popular.component';
import {OnlineOrderComponent} from "./online-order/online-order.component";
import {SaleComponent} from './adviser/sale/sale.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'adviser', component: AdviserComponent},
      {path: 'adviser/news', component: NewsComponent},
      {path: 'adviser/popular', component: PopularComponent},
      {path: 'adviser/sale', component: SaleComponent},
      // public
      {path: 'offers/:reference', component: OffersComponent},
      {path: 'complaints', component: ComplaintsComponent, canActivate: [RoleGuardService], data: {roles: [Role.CUSTOMER]}},
      {path: 'ticket-tracking/:id', component: TicketTrackingComponent},
      {path: 'top5', component: Top5Component},
      {path: 'reviews', component: ReviewsComponent, canActivate: [RoleGuardService], data: {roles: [Role.CUSTOMER]}},
      {path: 'shopping-basket', component: ShoppingBasketComponent},
      {path: 'settings', component: ProfileSettingsComponent},
      {path: 'online-order', component: OnlineOrderComponent},
      {path: 'stock-management', component: StockManagementComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
