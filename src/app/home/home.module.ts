
import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ShoppingBasketService} from './shopping-basket/shopping-basket.service';
import {ComplaintCreationDialogComponent} from './complaints/complaint-creation-dialog.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {AdviserComponent} from './adviser/adviser.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TicketTrackingComponent } from './ticket-tracking/ticket-tracking.component';
import { IconButtonComponent } from './reviews/icon-button/icon-button.component';
import { ScoreBarComponent } from './reviews/score-bar/score-bar.component';
import { OffersComponent } from './offers/offers.component';
import { ProductComponent } from './ticket-tracking/product/product.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {ShoppingBasketComponent} from './shopping-basket/shopping-basket.component';
import { Top5Component } from './top5/top5.component';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { NewsComponent } from './adviser/news/news.component';
import { PopularComponent } from './adviser/popular/popular.component';
import {ComplaintUpdateDialogComponent} from "./complaints/complaint-update-dialog.component";
import { OnlineOrderComponent } from './online-order/online-order.component';
import { TableStockComponent } from './stock-management/table-stock/table-stock.component';


@NgModule({
  declarations: [
    AdviserComponent,
    ComplaintsComponent,
    ComplaintCreationDialogComponent,
    ComplaintUpdateDialogComponent,
    HomeComponent,
    ReviewsComponent,
    TicketTrackingComponent,
    IconButtonComponent,
    ScoreBarComponent,
    OffersComponent,
    OnlineOrderComponent,
    ProductComponent,
    ShoppingBasketComponent,
    Top5Component,
    StockManagementComponent,
    NewsComponent,
    PopularComponent,
    TableStockComponent,
  ],
  entryComponents: [
    ComplaintCreationDialogComponent,
  ],
  imports: [
    HomeRoutingModule,
    IvyCarouselModule,
    SharedModule,
  ],
  providers: [
    ShoppingBasketService,
  ]
})
export class HomeModule {

}
