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

@NgModule({
  declarations: [
    AdviserComponent,
    ComplaintsComponent,
    ComplaintCreationDialogComponent,
    HomeComponent,
    ReviewsComponent,
    TicketTrackingComponent,
    IconButtonComponent,
    ScoreBarComponent,
    OffersComponent,
    ProductComponent,
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
