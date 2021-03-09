import { Component } from '@angular/core';
import {Article} from '../../shared/article.model';
import {PopularService} from './popular.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent{
  popularArticles: Article[] = [];

  constructor(private popularService: PopularService) {
    this.searchPopularArticles();
  }

  searchPopularArticles(): void {
      this.popularService.searchPopularArticles()
        .subscribe(articles => this.popularArticles = articles);
  }

}
