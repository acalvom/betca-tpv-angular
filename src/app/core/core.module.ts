import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpService} from './http.service';
import {TokensService} from './tokens.service';

import {DateComponent} from './date.component';
import {LoginDialogComponent} from './login-dialog.component';
import {CancelYesDialogComponent} from './cancel-yes-dialog.component';
import {CrudComponent} from './crud.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ReadDetailDialogComponent} from './read-detail.dialog.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [
    CancelYesDialogComponent,
    CrudComponent,
    DateComponent,
    LoginDialogComponent,
    ReadDetailDialogComponent,
  ],
  exports: [
    CancelYesDialogComponent,
    CrudComponent,
    DateComponent,
    LoginDialogComponent,
    ReadDetailDialogComponent,

  ],
  entryComponents: [
    CancelYesDialogComponent,
    LoginDialogComponent,
    ReadDetailDialogComponent,
  ],
  providers: [
    HttpService,
    TokensService
  ]
})
export class CoreModule {
}
