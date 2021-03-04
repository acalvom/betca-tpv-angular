import {Component, OnInit} from '@angular/core';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {User} from '@shared/models/userRegister.model';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
})
export class UsersManagementComponent implements OnInit{

  public user: User;
  constructor(private userCompleteService: UserCompleteService) {
  }

  ngOnInit(): void {
  }

}
