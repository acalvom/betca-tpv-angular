import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CoreModule} from '@core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppComponents} from './app.components';
import {AppServices} from './app.services';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    HomeModule,

    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AppComponents.COMPONENTS,
    AppComponents.DIALOGS
  ],
  entryComponents: [
    AppComponents.DIALOGS
  ],
  providers: [
    AppServices.SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
