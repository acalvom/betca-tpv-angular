import { Component, OnInit } from '@angular/core';
import {Article} from '../../shared/article.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  article1: Article = {barcode: '121212', description: 'Popular articles', retailPrice: 40};
  article2: Article = {barcode: '777777', description: 'Popular article more', retailPrice: 50};
  articlesPopular = [this.article1, this.article2, this.article1, this.article2, this.article1];

  constructor() { }

  ngOnInit(): void {
  }

}
