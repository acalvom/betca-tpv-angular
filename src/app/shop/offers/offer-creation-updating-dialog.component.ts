import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {OfferService} from './offer.service';
import {SharedArticleService} from '../shared/services/shared.article.service';
import {OfferCreateUpdate} from './offer-creation-updating.model';


@Component({
  templateUrl: './offer-creation-updating-dialog.component.html',
  styleUrls: ['./offer-dialog.component.css']
})

export class OfferCreationUpdatingDialogComponent {

  newOffer: OfferCreateUpdate;
  title: string;
  oldOffer: string;
  selectable = true;
  removable = true;

  @ViewChild('barcodeInput') barcodeInput: ElementRef<HTMLInputElement>;

  constructor(@Inject(MAT_DIALOG_DATA) data: OfferCreateUpdate, private offerService: OfferService,
              private sharedArticleService: SharedArticleService, private dialog: MatDialog) {
    this.title = data ? 'Update Offer' : 'Create Offer';
    this.newOffer = data ? data : {
      reference: Math.random().toString(36).substring(7), description: undefined,
      expiryDate: undefined, discount: undefined, articleBarcodes: []
    };
    this.oldOffer = data ? data.reference : undefined;
  }

  // TODO: change Math.random().toString(36).substring(7) to undefined when back-end is ready

  removeBarcode(barcode: string): void {
    const index = this.newOffer.articleBarcodes.indexOf(barcode);
    if (index >= 0) {
      this.newOffer.articleBarcodes.splice(index, 1);
    }
  }

  isCreate(): boolean {
    return this.oldOffer === undefined;
  }

  addBarcode(barcode): void {
    this.sharedArticleService
      .read(barcode)
      .subscribe(article => {
        this.newOffer.articleBarcodes.push(article.barcode);
        // console.log('barcodes ' + this.newOffer.articleBarcodes);
      });
  }

  create(): void {
    this.offerService
      .create(this.newOffer)
      .subscribe(() => this.dialog.closeAll());
  }

  update(): void {
    this.offerService
      .update(this.oldOffer, this.newOffer)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.newOffer.description)
      || this.check(this.newOffer.expiryDate.toString())
      || this.check(this.newOffer.discount.toString());
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
