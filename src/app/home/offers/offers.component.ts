import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {OfferService} from './offer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Offer} from './offer.model';

@Component({
  templateUrl: './offers.component.html',
})
export class OffersComponent implements OnInit {
  private reference: string;
  parameterValue: string;
  offer: Offer;

  constructor(private dialog: MatDialog, private offerService: OfferService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reference = this.activatedRoute.snapshot.paramMap.get('reference');
    this.parameterValue = this.reference;
    this.activatedRoute.params.subscribe(parameter => this.parameterValue = parameter.key);
    this.offerService.read(this.reference).subscribe(offer => this.offer = offer);

  }
}
