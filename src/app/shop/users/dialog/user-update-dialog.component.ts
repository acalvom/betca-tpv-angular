import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {User} from '@shared/models/userRegister.model';
import {Role} from '@core/role.model';
import {AuthService} from '@core/auth.service';
import {UserCompleteService} from '@shared/services/userComplete.service';


@Component({
  templateUrl: 'user-update-dialog.component.html',
  styleUrls: ['user-update-dialog.component.css']
})
export class UserUpdateDialogComponent implements OnInit {

  roleValues = Object.keys(Role).filter(key => isNaN(Number(key)));
  user: User;
  title: string;
  editable = false;


  constructor(@Inject(MAT_DIALOG_DATA) data: User, private dialog: MatDialog, private authService: AuthService, private userService: UserCompleteService) {
    this.title = 'Edit User';
    this.user = data;
  }

  ngOnInit(): void {
    console.log('dentro');

    if (this.authService.getRole() == Role.ADMIN) {
      this.editable = true;
    } else if ((this.authService.getRole() == Role.MANAGER) && (this.user.role == (Role.OPERATOR || Role.MANAGER || Role.CUSTOMER))) {
      this.editable = true;
    }
  }

  updateCompleteUser(): void {
    this.userService
      .setCompleteUser(this.user.mobile, this.user)
      .subscribe(() => this.dialog.closeAll());
  }


}
