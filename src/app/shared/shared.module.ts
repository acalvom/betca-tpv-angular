import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {UppercaseWords} from './pipes/UppercaseWordsPipe';
import {ReadDetailDialogComponent} from './dialogs/read-detail.dialog.component';
import {DateComponent} from './components/date.component';
import {CancelYesDialogComponent} from './dialogs/cancel-yes-dialog.component';
import {CrudComponent} from './components/crud.component';
import {SearchComponent} from './components/search.component';
import {MaterialModule} from './material.module';
import { FooterComponent } from './components/footer.component';


@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [
    CancelYesDialogComponent,
    CrudComponent,
    DateComponent,
    ReadDetailDialogComponent,
    SearchComponent,
    UppercaseWords,
    FooterComponent
  ],
  exports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CancelYesDialogComponent,
    CrudComponent,
    DateComponent,
    ReadDetailDialogComponent,
    SearchComponent,
    UppercaseWords,
    FooterComponent
  ],
  entryComponents: [
    CancelYesDialogComponent,
    ReadDetailDialogComponent,
  ]
})
export class SharedModule{
}
