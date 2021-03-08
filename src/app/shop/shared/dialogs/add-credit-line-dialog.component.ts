import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '../services/models/user.model';
import {SharedUserService} from '../services/shared.user.service';
import {SharedCreditLineService} from '../services/shared.credit-line.service';
import {Credit} from '../services/models/credit.model';

@Component({
  templateUrl: 'add-credit-line-dialog.component.html'
})

export class AddCreditLineDialogComponent {

  user: User;
  credit: Credit;

  constructor(@Inject(MAT_DIALOG_DATA) data, private snackBar: MatSnackBar, private userService: SharedUserService,
              private creditLineService: SharedCreditLineService) {

  }

  searchUser(mobile: string): void {
    if (mobile) {
      const y: number = +mobile;
      this.userService.read(y).subscribe(
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
    this.creditLineService.findByUserReference(this.user.mobile.toString()).subscribe(
      result => { if (result == null) {
          this.credit = {userReference: this.user.mobile.toString()};
          this.creditLineService.create(this.credit).subscribe(
            value => this.snackBar.open('Credit-line added successfully.', 'Close', {
              duration: 3000
            })
          );
        } else {
          this.snackBar.open('That user already has a credit-line.', 'Close', {
            duration: 3000
          });
        }
      }
    );
  }

}
