import {HttpService} from '@core/http.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BudgetCreation} from './budget-creation.model';




@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private static BUDGET = '/budget';
  private budgets: number[] = [111111111, 222222222];

  constructor(private httpService: HttpService) {
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
