import {Component, EventEmitter, Input, Output} from '@angular/core';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {
  @Input() title = 'Search';
  @Input() key: string;
  @Input() keys = of([]);
  @Input() obligatory = false;

  @Output() keyChange = new EventEmitter<string>();
  @Output() renew = new EventEmitter<any>();
  @Output() selected = new EventEmitter<string>();

  onRenew(): void {
    this.renew.emit();
  }

  resetKey(): void {
    this.key = '';
    this.keyChange.emit(this.key);
  }

  onClick(value): void {
    this.selected.emit(value);
  }

  public filter(value: string): void {
    this.keyChange.emit(value);
    this.keys = this.keys
      .pipe(
        map(keys => keys
          .filter(key => key.toLowerCase().includes(value.toLowerCase()))
        )
      );
  }
}
