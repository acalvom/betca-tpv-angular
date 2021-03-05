import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User} from '@shared/models/userRegister.model';
import {Role} from '@core/role.model';



@Component({
  templateUrl: 'user-dialog.component.html',
  styleUrls: ['user-dialog.component.css']
})
export class UserDialogComponent{

  roleValues = Object.keys(Role).filter(key => isNaN(Number(key)));
  user: User;
  title: string;


  constructor(@Inject(MAT_DIALOG_DATA) data: User){
    this.title = data ? 'Update User' : 'Create User';
    this.user = data;
  }


  update() {

  }
}
