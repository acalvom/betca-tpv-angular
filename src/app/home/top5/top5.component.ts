import { Component } from '@angular/core';
import {Article} from '../shared/article.model';
import { Top5Service } from './top5.service';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component {
  top5Articles: Article[] = [];
  constructor(private top5Service: Top5Service) {
    this.searchTop5Articles();
  }

  searchTop5Articles(): void{
    this.top5Service.searchTop5Articles()
      .subscribe(article => this.top5Articles = article);
  }

}
