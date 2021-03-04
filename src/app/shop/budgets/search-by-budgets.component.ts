import {Observable, of} from 'rxjs';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BudgetService} from './budget.service';


@Component({
  selector: 'app-search-by-budgets',
  templateUrl: './search-by-budgets.component.html'
})

export class SearchByBudgetComponent {
  budgets: Observable<number[]> = of([]);
  @Output() add = new EventEmitter<string>();
  @Input() budget: string;
  constructor(private budgetervice: BudgetService) {
  }

  public onSelect(value): void {
    this.add.emit(value);
  }

  searchByBudget(): void {
    this.budgets = this.budgetervice.searchBudget(this.budget);
  }
}
