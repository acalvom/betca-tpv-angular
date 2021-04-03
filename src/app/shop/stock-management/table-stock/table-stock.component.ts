import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-stock',
  templateUrl: './table-stock.component.html',
  styleUrls: ['./table-stock.component.css']
})
export class TableStockComponent implements OnInit {
  displayedColumnsProductsSold: string[] = ['position', 'barcode', 'description', 'price', 'dateSell'];
  displayedColumns: string[] = ['position', 'barcode', 'description', 'price', 'stock'];
  @Input() data;
  @Input() productSold;
  @Input() stock;

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }
}
