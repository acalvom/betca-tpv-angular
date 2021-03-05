import {Component, OnInit} from '@angular/core';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {User} from '@shared/models/userRegister.model';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {UserDialogComponent} from '../dialog/user-dialog.component';

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


  update(user: User): void {
    this.userCompleteService.searchCompleteUser(user.mobile)
      .subscribe(data => {
        this.dialog.open(UserDialogComponent, {data});
        console.log(data);
      });
  }
}
