import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {HttpService} from './http.service';
import {TokensService} from './tokens.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    HttpService,
    TokensService
  ]
})
export class CoreModule {
}
