import {Component} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {OfferSearch} from './offer-search.model';
import {OfferService} from './offer.service';
import {OfferCreationUpdatingDialogComponent} from './offer-creation-updating-dialog.component';
import {OfferMenu} from './offer-menu.model';
import {OfferCreateUpdate} from './offer-creation-updating.model';

@Component({
  templateUrl: './offers.component.html',
})

export class OffersComponent {
  offerSearch: OfferSearch;
  title = 'Offers management';
  offers = of([]);

  constructor(private dialog: MatDialog, private offerService: OfferService) {
    this.resetSearch();
  }

  search(): void {
    this.offers = this.offerService.search(this.offerSearch);
  }

  resetSearch(): void {
    this.offerSearch = {};
  }

  create(): void {
    this.dialog
      .open(OfferCreationUpdatingDialogComponent)
      .afterClosed()
      .subscribe(() => this.search());
  }

  update(offer: OfferMenu): void {
    this.offerService
      .read(offer.reference)
      .subscribe(fullOffer => this.dialog.open(OfferCreationUpdatingDialogComponent, {data: fullOffer})
        .afterClosed()
        .subscribe(() => this.search())
      );
  }

  print(offer: OfferCreateUpdate): void {
    this.offerService
      .printOffer(offer.reference)
      .subscribe(() => this.dialog.closeAll());
  }

  delete(offer: OfferMenu): void {
    this.offerService
      .deleteOffer(offer.reference)
      .subscribe(() => this.search());
  }
}
