import {Component} from '@angular/core';

import {SharedCashierService} from '../shared/services/shared.cashier.service';
import {CashierLast} from '../shared/services/models/cashier-last.model';

@Component({
  templateUrl: 'cashier-closed.component.html'
})
export class CashierClosedComponent {
  cashierLast: CashierLast = {closed: undefined, finalCash: undefined};

  constructor(private sharedCashierService: SharedCashierService) {
    this.sharedCashierService
      .readLast()
      .subscribe(cashier => this.cashierLast = cashier);
  }

}
