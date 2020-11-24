import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {LoginDialogComponent} from '@core/login-dialog.component';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  title = 'TPV';

  constructor(private dialog: MatDialog) {
  }

  login(): void {
    this.dialog.open(LoginDialogComponent,
      {
        data: {homeUrl: 'shop'}
      }
    );
  }
}
