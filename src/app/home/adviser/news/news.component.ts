import { Component } from '@angular/core';
import {Article} from '../../shared/article.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newArticles: Article[] = [];

  constructor(private newsService: NewsService) {
    this.searchNewArticleByDay();
  }

  searchNewArticleByDay(): void {
    this.newsService.searchNewArticleByDay()
      .subscribe(articles => {
        this.newArticles = articles;
        console.log('Articulos: ' + articles[1].barcode);
      });
  }
}
