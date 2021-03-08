import { Component, OnInit } from '@angular/core';
import {Article} from '../../shared/article.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articlesNew: Article[];

  constructor(private newsService: NewsService) {
    this.searchNewArticleByDay();
  }

  ngOnInit(): void {
  }

  searchNewArticleByDay(): void {
    this.newsService.searchNewArticleByDay()
      .subscribe(item => this.articlesNew = item);
  }
}
