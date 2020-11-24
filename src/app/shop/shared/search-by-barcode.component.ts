import {Observable, of} from 'rxjs';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SharedArticleService} from './services/shared.article.service';

@Component({
  selector: 'app-search-by-barcode',
  templateUrl: './search-by-barcode.component.html'
})
export class SearchByBarcodeComponent {
  barcodes: Observable<number[]> = of([]);

  @Input() barcode: string;
  @Output() barcodeChange = new EventEmitter<string>();

  constructor(private sharedArticleService: SharedArticleService) {
  }

  public onSelect(): void {
    this.barcodeChange.emit(this.barcode);
  }

  searchByBarcode(): void {
    this.barcodes = this.sharedArticleService.searchBarcode(this.barcode);
  }
}
