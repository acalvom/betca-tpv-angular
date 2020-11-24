import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home.component';
import {CoreModule} from '@core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class HomeModule { }
