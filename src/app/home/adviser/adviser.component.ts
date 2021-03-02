import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../shared/article.model';

@Component({
  selector: 'app-adviser',
  templateUrl: 'adviser.component.html',
  styleUrls: ['adviser.component.css'],
})
export class AdviserComponent implements OnInit{

  article1: Article = {barcode: '101010', description: 'First Article', retailPrice: 10};
  article2: Article = {barcode: '010101', description: 'Second Article', retailPrice: 11};
  @Input() articles = [this.article1, this.article2, this.article1, this.article2, this.article1];

  ngOnInit(): void {
  }



}
