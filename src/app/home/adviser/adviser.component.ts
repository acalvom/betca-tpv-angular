import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../shared/article.model';

@Component({
  selector: 'app-adviser',
  templateUrl: 'adviser.component.html',
  styleUrls: ['adviser.component.css'],
})
export class AdviserComponent implements OnInit{
  @Input() articles: Article[];
  @Output() add = new EventEmitter<Article>();

  ngOnInit(): void {
  }


  onClick(value): void {
    this.add.emit(value);
  }
}
