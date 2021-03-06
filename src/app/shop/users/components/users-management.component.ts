import {Component, OnInit} from '@angular/core';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {User} from '@shared/models/userRegister.model';
import {Observable, of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {UserUpdateDialogComponent} from '../dialog/user-update-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {RegisterDialogComponent} from '@shared/dialogs/register-dialog.component';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
})
export class UsersManagementComponent implements OnInit {

  public users = of([]);
  public data = of([]);

  constructor(private userCompleteService: UserCompleteService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.users = this.userCompleteService.getCompleteUsers();
    this.data = this.userCompleteService.getBasicUsersInfo();
  }

  updateUser(user: User): void {
    this.userCompleteService.searchCompleteUser(user.mobile)
      .subscribe(data => {
        this.dialog.open(UserUpdateDialogComponent, {data
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
    this.dialog.open(RegisterDialogComponent)
      .afterClosed()
      .subscribe(() => this.data = this.userCompleteService.getBasicUsersInfo());
  }
}
