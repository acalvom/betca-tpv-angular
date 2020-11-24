import {NgModule} from '@angular/core';

import {CoreModule} from '@core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from '@shared/shared.module';
import {HomeModule} from './home/home.module';
import {ShopModule} from './shop/shop.module';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    HomeModule,
    ShopModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
