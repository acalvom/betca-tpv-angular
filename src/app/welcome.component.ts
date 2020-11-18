import {Component} from '@angular/core';

import {LoginDialogComponent} from './core/login-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css'],
})
export class WelcomeComponent {
  title = 'TPV';

  constructor(private dialog: MatDialog) {
  }

  login(): void {
    this.dialog.open(LoginDialogComponent,
      {
        data: {homeUrl: 'home'}
      }
    );
  }
}
