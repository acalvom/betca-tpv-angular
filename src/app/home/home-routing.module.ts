import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from '@core/role.model';
import {RoleGuardService} from '@core/role-guard.service';
import {AdviserComponent} from './adviser/adviser.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {HomeComponent} from './home.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {TicketTrackingComponent} from './ticket-tracking/ticket-tracking.component';
import {OffersComponent} from './offers/offers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'adviser', component: AdviserComponent}, // public
      {path: 'offers', component: OffersComponent},
      {path: 'complaints', component: ComplaintsComponent, canActivate: [RoleGuardService], data: {roles: [Role.CUSTOMER]}},
      {path: 'ticket-tracking/:id', component: TicketTrackingComponent},
      {path: 'reviews', component: ReviewsComponent, canActivate: [RoleGuardService], data: {roles: [Role.CUSTOMER]}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
