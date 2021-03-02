import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@core/auth.service';
import {User} from '@core/user.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../shop/users/user.service';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PROFILE_FORM} from '@shared/form.constant';


@Component({
  selector: 'app-settings',
  templateUrl: 'profile-settings.component.html',
  styleUrls: ['profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {


  public editable = false;
  public user: User;

  public settingsFormGroup: FormGroup;

  constructor(private router: Router, private snackBar: MatSnackBar,
              private authService: AuthService, private fb: FormBuilder, private userService: UserService) {

  }


  ngOnInit(): void {

    this.settingsFormGroup = this.fb.group(PROFILE_FORM.CONF);

    if (this.authService.isAuthenticated()) {
      this.settingsFormGroup.patchValue({
        firstNameControl: this.authService.getName(),
        mobileControl: this.authService.getMobile(),
        passwordControl: this.authService.getPassword(),
        roleControl: this.authService.getRole(),
      });
    }
  }

  update(): void {
    console.log('update');
    of(console.log(''))
      .subscribe(() => {
        this.openSnackBar('Usuario actualizado correctamente', '');
      });
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
