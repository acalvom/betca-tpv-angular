import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/article.model';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component implements OnInit {
  displayedColumns: string[] = ['position', 'barcode', 'description', 'retailPrice'];
  article1: Article = {barcode: '111111', description: 'top 1 sell', retailPrice: 12};
  article2: Article = {barcode: '222222', description: 'top 2 sell', retailPrice: 56};
  article3: Article = {barcode: '333333', description: 'top 3 sell', retailPrice: 34};
  article4: Article = {barcode: '444444', description: 'top 4 sell', retailPrice: 23};
  article5: Article = {barcode: '555555', description: 'top 5 sell', retailPrice: 21};
  bestsellers = [this.article1, this.article2, this.article3, this.article4, this.article5];
  dataSource = this.bestsellers;
  constructor() { }

  ngOnInit(): void {
  }

}
