import {Component, OnInit} from '@angular/core';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {User} from '@shared/models/userRegister.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
})
export class UsersManagementComponent implements OnInit{

  public users: User[];
  constructor(private userCompleteService: UserCompleteService) {
  }

  ngOnInit(): void {

    this.userCompleteService.getCompleteUsers().subscribe( data => {
      this.users = data;
    });
  }

}
