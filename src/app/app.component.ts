import {Component} from '@angular/core';

import {environment} from '../environments/environment';
import {HttpService} from './core/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version: string;
  profile: string;
  backEndUser: string;
  backEndCore: string;

  constructor(private httpService: HttpService) {
    this.version = environment.VERSION;
    this.profile = environment.production ? 'Prod' : 'Dev';
    this.backEndUser = environment.REST_USER;
    this.backEndCore = environment.REST_CORE;
  }
}
