import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';
import {TokensService} from './tokens.service';
import {LoginDialogComponent} from '@core/login-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    CommonModule,
  ],
  declarations: [
    LoginDialogComponent,
  ],
  providers: [
    HttpService,
    TokensService
  ],
  exports: [
    LoginDialogComponent,
  ],
  entryComponents: [
    LoginDialogComponent,
  ]
})
export class CoreModule {
}
