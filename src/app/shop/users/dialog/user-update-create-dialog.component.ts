import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {User} from '@shared/models/userRegister.model';
import {Role} from '@core/role.model';
import {AuthService} from '@core/auth.service';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  templateUrl: 'user-update-create-dialog.component.html',
  styleUrls: ['./user-update-create-dialog.component.css']


})
export class UserUpdateCreateDialogComponent implements OnInit {

  roleValues = Object.keys(Role).filter(key => isNaN(Number(key)));
  user: User;
  title: string;
  editable: boolean;
  oldUser: number;


  constructor(@Inject(MAT_DIALOG_DATA) data: User, private dialog: MatDialog,
              private authService: AuthService, private userService: UserCompleteService, private snackBar: MatSnackBar) {
    console.log(data);
    this.title = data ? 'Edit User' : 'Create User';
    this.user = data ? data : {
      mobile: undefined,
      firstName: undefined,
      familyName: undefined,
      email: undefined,
      dni: undefined,
      address: undefined,
      password: undefined,
      role: Role.CUSTOMER,
      active: true,
      registrationDate: new Date()
    };

    this.oldUser = data ? data.mobile : undefined;
  }

  ngOnInit(): void {
  }

  updateCompleteUser(): void {
    console.log(this.user.active);
    this.userService
      .setCompleteUser(this.oldUser, this.user)
      .subscribe(() => this.openSnackBar('User successfully registered', 'OK'));
  }

  createCompleteUser(): void{
    this.userService
      .createCompleteUser(this.user)
      .subscribe(() => {
        this.openSnackBar('User successfully created', 'OK');
      });
  }

  isCreate(): boolean {
    return this.oldUser === undefined;
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }


  invalid(): boolean {
    return (this.user.mobile === undefined || null) ||
      (this.user.firstName === undefined || null || this.user.firstName === '' );
  }

  canUpdatedRoles(): boolean {
    return !(this.authService.getRole() === Role.OPERATOR || this.authService.getRole() === Role.CUSTOMER);
  }


  canActivateAccounts(): boolean {
    return this.authService.getRole() !== Role.CUSTOMER;
  }
}
