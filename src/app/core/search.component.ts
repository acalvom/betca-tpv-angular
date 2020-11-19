import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  @Input() title = 'Articles management';
  @Input() key: string;
  @Input() keys = of([]);

  @Output() keyChange = new EventEmitter<string>();
  @Output() renew = new EventEmitter<any>();

  onRefresh(): void {
    this.renew.emit();
  }

  resetKey(): void {
    this.key = '';
    this.keyChange.emit(this.key);
  }

  public filter(value: string): void {
    this.keyChange.emit(value);
    this.keys = this.keys.pipe(
      map(keys => keys.filter(key => key.toLowerCase().includes(value.toLowerCase())))
    );
  }
}
