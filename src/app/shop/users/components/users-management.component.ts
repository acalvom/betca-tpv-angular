import {Component, OnInit} from '@angular/core';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {User} from '@shared/models/userRegister.model';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {UserUpdateCreateDialogComponent} from '../dialog/user-update-create-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {AuthService} from '@core/auth.service';
import {UserInfoModel} from '../models/user-info.model';

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
    this.getBasicInfo();
  }

  getBasicInfo(): void{
    this.userCompleteService.getCompleteUsers().subscribe(users => {
      this.data = of(users.map(user => new UserInfoModel(user.mobile, user.firstName, user.role)));
    });
  }

  updateUser(user: User): void {
    this.userCompleteService.searchCompleteUser(user.mobile)
      .subscribe(data => {
        this.dialog.open(UserUpdateCreateDialogComponent, {data
        })
          .afterClosed()
          .subscribe(() => this.getBasicInfo());
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
      .subscribe(() => this.getBasicInfo());
  }

  deleteUser(user: User): void{
    if (this.authService.isAdmin()){
      this.userCompleteService
        .deleteCompleteUser(user.mobile)
        .subscribe(() =>  this.getBasicInfo());
    }
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
