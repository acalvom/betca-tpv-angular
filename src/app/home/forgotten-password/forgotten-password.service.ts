import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ForgottenPasswordService {
  static SEARCH = '/send_email';

  constructor(private httpService: HttpService, private snackBar: MatSnackBar) {
  }

  resetPassword(mail: string, password: string): void {
    this.httpService.put(EndPoints.RECOVER_PASSWORD, {mail, password})
      .subscribe(() => {
          this.openSnackBar('Your password has been successfully updated.', 'OK');
        }
      );
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}

