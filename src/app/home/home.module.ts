import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ShoppingBasketService} from './shopping-basket/shopping-basket.service';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    ShoppingBasketService,
  ]
})
export class HomeModule {

}
