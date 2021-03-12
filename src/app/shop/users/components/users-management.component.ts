import {Component, OnInit} from '@angular/core';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {User} from '@shared/models/userRegister.model';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {UserUpdateCreateDialogComponent} from '../dialog/user-update-create-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {AuthService} from '@core/auth.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
})
export class UsersManagementComponent implements OnInit {

  public users = of([]);
  public data = of([]);

  constructor(private userCompleteService: UserCompleteService, private dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.users = this.userCompleteService.getCompleteUsers();
    this.data = this.userCompleteService.getBasicUsersInfo();
  }

  updateUser(user: User): void {
    this.userCompleteService.searchCompleteUser(user.mobile)
      .subscribe(data => {
        this.dialog.open(UserUpdateCreateDialogComponent, {data
        })
          .afterClosed()
          .subscribe(() => (this.data = this.userCompleteService.getBasicUsersInfo()));
      });
  }

  readUser(user: User): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'User Details',
        object: this.userCompleteService.searchCompleteUser(user.mobile)
      }
    });
  }

  createUser(): void {
    this.dialog.open(UserUpdateCreateDialogComponent)
      .afterClosed()
      .subscribe(() => this.data = this.userCompleteService.getBasicUsersInfo());
  }

  deleteUser(user: User): void{
    if (this.authService.isAdmin()){
      this.userCompleteService
        .deleteCompleteUser(user.mobile)
        .subscribe(() => (this.data = this.userCompleteService.getBasicUsersInfo()));
    }
  }
}
