import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';
import {TokensService} from './tokens.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  declarations: [],
  providers: [
    HttpService,
    TokensService
  ],
})
export class CoreModule {
}
