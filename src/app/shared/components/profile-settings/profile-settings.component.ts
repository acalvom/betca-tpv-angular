import {Component, OnInit} from '@angular/core';
import {User} from '../../models/userRegister.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PROFILE_FORM} from '@shared/form.constant';
import {UserCompleteService} from '@shared/services/userComplete.service';
import {ProfileSettingsService} from './profile-settings.service';


@Component({
  selector: 'app-settings',
  templateUrl: 'profile-settings.component.html',
  styleUrls: ['profile-settings.component.css']
})

export class ProfileSettingsComponent implements OnInit {
  user: User;
  settingsFormGroup: FormGroup;
  editable = false;
  mobileInputData: number;
  passwordInputData: string;
  formManage: any;

  constructor(private router: Router, private snackBar: MatSnackBar,
              , private fb: FormBuilder,
              private profileSettingsService: ProfileSettingsService, private authService: AuthService, private userCompleteService: UserCompleteService) {

  ngOnInit(): void {
    this.readUser();
    this.settingsFormGroup = this.fb.group(PROFILE_FORM.CONF);
    this.fillForm(this.user);
  }

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
