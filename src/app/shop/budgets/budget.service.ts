import {HttpService} from '@core/http.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BudgetCreation} from './budget-creation.model';




@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private static BUDGET = '/budget';

  constructor(private httpService: HttpService) {
  }
  createBudget(budgetCreation: BudgetCreation): Observable<void> {
    return of(console.log('Success'));
  }
}
