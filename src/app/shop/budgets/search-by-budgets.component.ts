import {Observable, of} from 'rxjs';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BudgetService} from './budget.service';


@Component({
  selector: 'app-search-by-budgets',
  templateUrl: './search-by-budgets.component.html'
})

export class SearchByBudgetComponent {
  references: Observable<string[]> = of([]);
  @Input() reference: string;
  @Output() add = new EventEmitter<string>();
  constructor(private budgetService: BudgetService) {
  }

  public onSelect(value): void {
    this.add.emit(value);
  }

  searchByBudget(): void {
    this.references = this.budgetService.searchBudget(this.reference);
  }
}
