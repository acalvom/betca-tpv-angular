import { Component, OnInit } from '@angular/core';
import {Article} from '../../shared/article.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  article1: Article = {barcode: '222222', description: 'News articles', retailPrice: 20};
  article2: Article = {barcode: '333333', description: 'News article more', retailPrice: 30};
  articlesNew = [this.article1, this.article2, this.article1, this.article2, this.article1];

  constructor() { }

  ngOnInit(): void {
  }

}
