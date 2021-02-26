import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {UserSearch} from './user-search-model';
import {UserService} from './user.service';

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

  constructor(private userService: UserService) {
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

}
