import { Component } from '@angular/core';
import {name} from '../../package.json';
import {version} from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  NAME = name;
  VERSION = version;
}
