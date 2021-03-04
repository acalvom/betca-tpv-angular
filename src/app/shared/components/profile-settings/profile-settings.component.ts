import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@core/auth.service';
import {User} from '@core/user.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PROFILE_FORM} from '@shared/form.constant';
import {UserCompleteService} from '@shared/services/userComplete.service';


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
              private authService: AuthService, private fb: FormBuilder, private userCompleteService: UserCompleteService) {

  }


  ngOnInit(): void {

    this.settingsFormGroup = this.fb.group(PROFILE_FORM.CONF);

    if (this.authService.isAuthenticated()) {

      this.userCompleteService.searchCompleteUser(this.authService.getMobile()).subscribe(user => {

        this.settingsFormGroup.patchValue({
          firstNameControl: user.firstName,
          mobileControl: user.mobile,
          familyNameControl: user.familyName,
          emailControl: user.email,
          dniControl: user.dni,
          addressControl: user.address,
          registrationDate: user.registrationDate.getDay() + '/' + (user.registrationDate.getMonth() + 1)
            + '/' + user.registrationDate.getFullYear(),
          passwordControl: user.password,
          roleControl: user.role,
        });

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
