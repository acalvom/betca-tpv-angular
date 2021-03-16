import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {ProfileSettingsService} from '@shared/components/profile-settings/profile-settings.service';
import {User} from '@shared/models/userUpdate.model';
import {PROFILE_FORM} from '@shared/form.constant';

@Component({
  selector: 'app-settings',
  templateUrl: 'profile-settings.component.html',
  styleUrls: ['profile-settings.component.css']
})
export class ProfileSettingsComponent {

  settingsFormGroup: FormGroup;
  formManage: any;
  user: User = {
    mobile: undefined,
    firstName: undefined,
    familyName: undefined,
    email: undefined,
    dni: undefined,
    address: '',
    role: undefined,
    registrationDate: undefined,
    active: undefined
  };
  editable = false;


  constructor(private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder,
              private profileSettingsService: ProfileSettingsService) {
    this.settingsFormGroup = this.fb.group(PROFILE_FORM.CONF);
    this.readUser();
  }

  readUser(): void {
    this.profileSettingsService.read(this.profileSettingsService.getMobile())
      .subscribe(user => {
        Object.assign(this.user, user);
        this.fillForm();
      });
  }

  fillForm(): void {
    if (this.profileSettingsService.isAuthenticated()) {
      this.settingsFormGroup.patchValue({
        firstNameControl: this.user.firstName,
        familyNameControl: this.user.familyName,
        dniControl: this.user.dni,
        emailControl: this.user.email,
        registrationDateControl: this.user.registrationDate,
        activeControl: this.user.active,
        mobileControl: this.user.mobile,
        roleControl: this.user.role,
      });
    }
  }

  update(): void {
    this.formDataToUser();
    console.log(this.user);
    this.profileSettingsService.update(this.profileSettingsService.getMobile(), this.user)
      .subscribe(() => {
        this.profileSettingsService.reDoLogin(this.user.mobile, this.profileSettingsService.getPassword());
        this.openSnackBar('User successfully updated', 'OK');
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
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
