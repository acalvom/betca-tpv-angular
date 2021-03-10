import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {OfferService} from './offer.service';
import {Offer} from './offer.model';


@Component({
  templateUrl: './offers.component.html',
})
export class OffersComponent {

  constructor(private dialog: MatDialog, private offerService: OfferService) {
  }

  read(offer: Offer): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Offer Details',
        object: this.offerService.read(offer.reference)
      }
    });
  }
}
