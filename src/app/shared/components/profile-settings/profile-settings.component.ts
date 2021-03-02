import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@core/auth.service';
import {User} from '@core/user.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../shop/users/user.service';


@Component({
  selector: 'app-settings',
  templateUrl: 'profile-settings.component.html',
  styleUrls: ['profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {


  public editable = false;
  public user: User;

  public settingsFormGroup: FormGroup;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private userService: UserService) {

  }


  ngOnInit(): void {

    this.settingsFormGroup = this.fb.group({
      nameControl: [''],
      mobileControl: [''],
      passwordControl: [''],
      roleControl: [''],
      creationDateControl: ['']
    });

    this.user = {
      mobile: this.authService.getMobile(),
      name: this.authService.getName(),
      token: this.authService.getToken(),
      role: this.authService.getRole()
    };

    if (this.authService.isAuthenticated()) {
      this.settingsFormGroup.patchValue({
        nameControl: this.user.name,
        mobileControl: this.user.mobile,
        passwordControl: this.authService.getPassword(),
        roleControl: this.user.role,
      });
    }
  }

  update(): void {
    console.log('updating');
  }


}
