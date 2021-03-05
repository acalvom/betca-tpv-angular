import { Component } from '@angular/core';
import {of} from 'rxjs';
import {UserSearch} from '../models/user-search-model';
import {UserService} from '../services/user.service';
import {User} from '@core/user.model';
import {MatDialog} from '@angular/material/dialog';
import {UserCreationUpdatingDialogComponent} from '../dialog/user-creation/user-creation-updating-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
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
    this.userService.read(user.mobile)
      .subscribe(fullUser => this.dialog.open(UserCreationUpdatingDialogComponent, {data: fullUser})
        .afterClosed()
        .subscribe(() => this.search())
      );
  }

}
