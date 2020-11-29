import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {HttpService} from '@core/http.service';
import {AuthService} from '@core/auth.service';
import {RoleGuardService} from '@core/role-guard.service';
import {TokenInterceptor} from '@core/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  declarations: [],
  providers: [
    HttpService,
    AuthService,
    RoleGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
})
export class CoreModule {
}
