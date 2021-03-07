import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-stock',
  templateUrl: './table-stock.component.html',
  styleUrls: ['./table-stock.component.css']
})
export class TableStockComponent implements OnInit {
  displayedColumnsProductsSold: string[] = ['position', 'barcode', 'description', 'price', 'dateSell'];
  displayedColumns: string[] = ['position', 'barcode', 'description', 'price'];
  @Input() data;
  @Input() productSold;
  @Input() stock;

  constructor() {
  }

  ngOnInit(): void {
  }

}
