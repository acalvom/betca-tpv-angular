import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version: string;
  profile: string;

  constructor() {
    this.version = environment.VERSION;
    this.profile = environment.production ? 'Prod' : 'Dev';
  }
}
