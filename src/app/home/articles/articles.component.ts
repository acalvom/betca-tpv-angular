import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ReadDetailDialogComponent} from '../../core/read-detail.dialog.component';
import {Article} from './article.model';
import {ArticleSearch} from './article-search.model';
import {ArticleService} from './article.service';
import {ArticleCreationUpdatingDialogComponent} from './article-creation-updating-dialog.component';

@Component({
  templateUrl: 'articles.component.html'
})
export class ArticlesComponent {
  barcode: string;
  articleSearch: ArticleSearch;
  title = 'Articles management';
  articles: Article[];

  constructor(private dialog: MatDialog, private articleService: ArticleService) {
    this.resetSearch();
    this.articles = undefined;
  }

  search(): void {
    this.articleService.search(this.articleSearch)
      .subscribe(data => this.articles = data);
  }

  resetSearch(): void {
    this.articleSearch = {};
  }

  unfinished(): void {
    this.articleService.searchUnfinished()
      .subscribe(data => this.articles = data);
  }

  create(): void {
    this.dialog.open(ArticleCreationUpdatingDialogComponent);
  }

  read(article: Article): void {
    this.articleService.read(article.barcode)
      .subscribe(fullArticle =>
        this.dialog.open(ReadDetailDialogComponent, {data: {object: fullArticle, title: 'Provider Details'}})
      );
  }

  update(article: Article): void {
    this.articleService.read(article.barcode)
      .subscribe(fullArticle => this.dialog.open(ArticleCreationUpdatingDialogComponent, {data: fullArticle}));
  }
}
