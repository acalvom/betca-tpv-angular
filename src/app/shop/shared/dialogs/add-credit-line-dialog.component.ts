import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User} from '../services/models/user.model';
import {SharedUserService} from '../services/shared.user.service';

@Component({
  templateUrl: 'add-credit-line-dialog.component.html'
})

export class AddCreditLineDialogComponent {

  user: User;

  constructor(@Inject(MAT_DIALOG_DATA) data, private userService: SharedUserService) {

  }

  searchUser(mobile: number): void {
    if (mobile) {
      this.userService.read(mobile).subscribe(
        value => this.user = value
      );
    }
  }

  managedMobile(): boolean {// TODO ? VER SI LO HAGO
    return !!this.user;
  }

  resetMobile(): void {
    this.user = undefined;
  }

  create(): void {
    // TODO
  }

}
