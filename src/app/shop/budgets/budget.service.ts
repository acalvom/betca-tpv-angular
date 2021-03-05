import {HttpService} from '@core/http.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BudgetCreation} from './budget-creation.model';
import {Shopping} from '../shared/services/models/shopping.model';




@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private static BUDGET = '/budget';
  private budgets: number[] = [111111111, 222222222, 3333333333];
  budget: Shopping = {
    barcode: '111',
    description: 'budget',
    retailPrice: 10,
    amount: 10,
    discount: 1,
    total: 10,
    state: 0,
    updateTotal: null,
    updateDiscount: null
  };
  constructor(private httpService: HttpService) {
  }
  read(budget: string): Observable<Shopping> {
    return of(this.budget);
  }
  createBudget(budgetCreation: BudgetCreation): Observable<void> {
    return of(console.log('Success'));
  }
  searchBudget(budget: string): Observable<number[]> {
    return of (this.budgets);
    /*return of(console.log('Success'));
    return this.httpService
      .param('budgets', budgets)
      .get(EndPoints.BUDGETS + BudgetService.BUDGET)
      .pipe(
        map(response => response.budgets)
      );*/
  }
}
