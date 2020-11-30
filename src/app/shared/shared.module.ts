import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {FooterComponent} from '@shared/components/footer.component';
import {MaterialModule} from '@shared/material.module';
import {UppercaseWords} from '@shared/pipes/UppercaseWordsPipe';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {DateComponent} from '@shared/components/date.component';
import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';
import {CrudComponent} from '@shared/components/crud.component';
import {SearchComponent} from '@shared/components/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
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
