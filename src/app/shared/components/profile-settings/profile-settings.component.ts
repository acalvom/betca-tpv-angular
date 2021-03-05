import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {ProfileSettingsService} from '@shared/components/profile-settings/profile-settings.service';
import {User} from '@shared/models/userRegister.model';
import {PROFILE_FORM} from '@shared/form.constant';


@Component({
  selector: 'app-settings',
  templateUrl: 'profile-settings.component.html',
  styleUrls: ['profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  settingsFormGroup: FormGroup;
  formManage: any;
  user: User;
  editable = false;


  constructor(private router: Router, private snackBar: MatSnackBar,
              private fb: FormBuilder, private profileSettingsService: ProfileSettingsService) {
  }

  ngOnInit(): void {
    this.readUser();
    this.settingsFormGroup = this.fb.group(PROFILE_FORM.CONF);
    this.fillForm(this.user);
  }

  readUser(): void {
    this.profileSettingsService.read(this.profileSettingsService.getMobile())
      .subscribe(user => this.user = user);
  }


  fillForm(user: User): void {

    if (this.profileSettingsService.isAuthenticated()) {
      this.settingsFormGroup.patchValue({
        firstNameControl: user.firstName,
        mobileControl: user.mobile,
        passwordControl: user.password,
        roleControl: user.role,
      });
    }
  }

  update(): void {

    this.formDataToUser();
    this.profileSettingsService.update(this.profileSettingsService.getMobile(), this.user)
      .subscribe(() => {
        // this.profileSettingsService.reDoLogin(this.user.mobile, this.user.password);
        this.openSnackBar('User successfully registered', 'OK');
      });
  }


  formDataToUser(): void {
    this.formManage = this.settingsFormGroup.getRawValue();

    this.user.mobile = this.formManage.mobileControl;
    this.user.firstName = this.formManage.firstNameControl;
    this.user.familyName = this.formManage.familyNameControl;
    this.user.email = this.formManage.emailControl;
    this.user.dni = this.formManage.dniControl;
    this.user.address = this.formManage.addressControl;
    this.user.password = this.formManage.passwordControl;
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
