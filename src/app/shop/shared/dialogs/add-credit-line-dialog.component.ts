import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  templateUrl: 'add-credit-line-dialog.component.html'
})

export class AddCreditLineDialogComponent {

  user = undefined;

  constructor(@Inject(MAT_DIALOG_DATA) data) {

  }

  // TODO Extraer a shared lo de buscar usuario cuando vaya
  searchUser(mobile: string): void {
    if (mobile) {
      // TODO falta buscar el user en BD, si no existe, debe sacar un dialogo diciendolo
      this.user = {mobile: Number(mobile)};
    }
  }

  managedMobile(): boolean {// TODO ? VER SI LO HAGO
    return !!this.user;
  }

  resetMobile(): void {
    this.user = undefined;
  }

  create(): void {
    // TODO
  }

}
