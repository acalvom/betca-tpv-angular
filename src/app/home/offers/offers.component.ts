import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {OfferService} from './offer.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  templateUrl: './offers.component.html',
})
export class OffersComponent implements OnInit {
  private reference: string;

  parameterValue: string;

  constructor(private dialog: MatDialog, private offerService: OfferService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reference = this.activatedRoute.snapshot.paramMap.get('reference');
    console.log('Reference: ' + this.reference);
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Offer Details',
        object: this.offerService.read(this.reference)
      }
    });

    this.parameterValue = this.reference;
    this.activatedRoute.params.subscribe(parameter => {
      this.parameterValue = parameter.key;
      console.log(parameter.reference);
    });
  }
}
