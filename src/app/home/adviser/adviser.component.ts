import {Component, OnInit} from '@angular/core';
import {Article} from '../shared/article.model';

@Component({
  templateUrl: 'adviser.component.html',
  styleUrls: ['adviser.component.css'],
})
export class AdviserComponent implements OnInit{

  article1: Article = {barcode: '101010', description: 'First Article', retailPrice: 10};
  article2: Article = {barcode: '010101', description: 'Second Article', retailPrice: 11};
  newArticle = [this.article1, this.article2, this.article1, this.article2];

  ngOnInit(): void {
  }



}
