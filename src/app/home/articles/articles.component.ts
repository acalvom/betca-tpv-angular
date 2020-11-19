import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ReadDetailDialogComponent} from '../../core/read-detail.dialog.component';
import {Article} from './article.model';
import {ArticleSearch} from './article-search.model';
import {ArticleService} from './article.service';
import {ArticleCreationUpdatingDialogComponent} from './article-creation-updating-dialog.component';
import {of} from 'rxjs';

@Component({
  templateUrl: 'articles.component.html'
})
export class ArticlesComponent {
  barcode: string;
  barcodes = of([]);
  articleSearch: ArticleSearch;
  title = 'Articles management';
  columns = ['barcode', 'description', 'stock'];
  articles: Article[];

  constructor(private dialog: MatDialog, private articleService: ArticleService) {
    this.resetSearch();
    this.articles = undefined;
  }

  searchByBarcode(): void {
    this.barcodes = this.articleService.searchByBarcode(this.barcode);
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
      .subscribe(fullArticle => this.dialog.open(ArticleCreationUpdatingDialogComponent, {data: fullArticle})
        .afterClosed()
        .subscribe(() => this.search())
      );
  }
}
