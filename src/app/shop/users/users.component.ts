import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {UserSearch} from './user-search-model';
import {UserService} from './user.service';
import {Article} from '../shared/services/models/article.model';
import {ArticleCreationUpdatingDialogComponent} from '../articles/article-creation-updating-dialog.component';
import {User} from '@core/user.model';
import {MatDialog} from '@angular/material/dialog';
import {UserCreationUpdatingDialogComponent} from './user-creation-updating-dialog.component';
import {Role} from '@core/role.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userName: string;
  userSearch: UserSearch;
  title = 'Users management';
  users = of([]);

  constructor(private dialog: MatDialog, private userService: UserService) {
    this.resetSearch();
  }

  search(): void {
    this.users = this.userService.search(this.userSearch);
  }

  resetSearch(): void {
    this.userSearch = {};
  }

  unfinished(): void {
    this.users = this.userService.searchUnfinished();
  }

  update(user: User): void {
    of(
      {mobile: 1234324, name: 'Hector', role: Role.CUSTOMER, token: ' '},
    ).subscribe(fullUser => this.dialog.open(UserCreationUpdatingDialogComponent, {data: fullUser}));
    /*this.userService.read(user.mobile)
      .subscribe(fullUser => this.dialog.open(UserCreationUpdatingDialogComponent, {data: fullUser}));*/
  }

}
