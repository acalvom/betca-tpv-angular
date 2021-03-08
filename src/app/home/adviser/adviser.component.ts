import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../shared/article.model';

@Component({
  selector: 'app-adviser',
  templateUrl: 'adviser.component.html',
  styleUrls: ['adviser.component.css'],
})
export class AdviserComponent implements OnInit{
  @Input() articles: Article[];

  ngOnInit(): void {
  }



}
