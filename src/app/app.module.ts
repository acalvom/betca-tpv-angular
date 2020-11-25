import {NgModule} from '@angular/core';

import {CoreModule} from '@core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from '@shared/shared.module';
import {HomeModule} from './home/home.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    HomeModule,
    // ShopModule,  eager load
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
