import {Component} from '@angular/core';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {OfferSearch} from './offer-search.model';
import {OfferService} from './offer.service';

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
}
