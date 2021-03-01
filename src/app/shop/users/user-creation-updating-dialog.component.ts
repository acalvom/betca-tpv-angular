import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import {User} from '@core/user.model';
import {Role} from '@core/role.model';
import {UserService} from './user.service';

@Component({
  templateUrl: 'user-creation-updating-dialog.component.html',
  styleUrls: ['user-creation-updating-dialog.component.css']
})

export class UserCreationUpdatingDialogComponent {
  roleValues = Object.keys(Role).filter(key => isNaN(Number(key)));
  user: User;
  title: string;
  oldRole: Role;

  constructor(@Inject(MAT_DIALOG_DATA) data: User, private userService: UserService,
              private dialog: MatDialog) {
    this.title = data ? 'Update User' : 'Create User';
    this.user = data;
    this.oldRole = data ? data.role : undefined;
  }

  isCreate(): boolean {
    return this.oldRole === undefined;
  }

  update(): void {
    this.userService
      .update(this.oldRole, this.user)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.user.name) || this.check(this.user.role)
      || (this.user.mobile === undefined || null);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }

}
