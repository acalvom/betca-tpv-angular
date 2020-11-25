import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';

import {UppercaseWords} from './pipes/UppercaseWordsPipe';
import {ReadDetailDialogComponent} from './dialogs/read-detail.dialog.component';
import {DateComponent} from './components/date.component';
import {CancelYesDialogComponent} from './dialogs/cancel-yes-dialog.component';
import {CrudComponent} from './components/crud.component';
import {SearchComponent} from './components/search.component';
import {MaterialModule} from './material.module';
import {FooterComponent} from '@shared/components/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    LoginDialogComponent,
    CancelYesDialogComponent,
    CrudComponent,
    DateComponent,
    ReadDetailDialogComponent,
    SearchComponent,
    UppercaseWords,
    FooterComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    LoginDialogComponent,
    CancelYesDialogComponent,
    CrudComponent,
    DateComponent,
    ReadDetailDialogComponent,
    SearchComponent,
    UppercaseWords,
    FooterComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    CancelYesDialogComponent,
    ReadDetailDialogComponent,
  ]
})
export class SharedModule {
}
