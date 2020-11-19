import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ReadDetailDialogComponent} from '../../core/read-detail.dialog.component';
import {Article} from './article.model';
import {ArticleSearch} from './article-search.model';
import {ArticleService} from './article.service';
import {ArticleCreationUpdatingDialogComponent} from './article-creation-updating-dialog.component';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

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

  search(): void {
    this.articleService.search(this.articleSearch)
      .subscribe(data => this.articles = data);
  }

  searchByBarcode(): void {
    this.barcodes = this.articleService.searchByBarcode(this.barcode);
  }

  public filter(value: string): void {
    this.barcodes = this.barcodes.pipe(
      map(barcodes => barcodes.filter(barcode => barcode.toLowerCase().includes(value.toLowerCase())))
    );
  }

  resetSearch(): void {
    this.articleSearch = {};
  }

  create(): void {
    this.dialog.open(ArticleCreationUpdatingDialogComponent)
      .afterClosed()
      .subscribe(() => this.articles = undefined);
  }

  read(article: Article): void {
    this.articleService.read(article.barcode)
      .subscribe(fullProvider =>
        this.dialog.open(ReadDetailDialogComponent, {data: {object: fullProvider, title: 'Provider Details'}})
      );
  }

  update(article: Article): void {
    this.articleService.read(article.barcode)
      .subscribe(fullProvider => this.dialog.open(ArticleCreationUpdatingDialogComponent, {data: fullProvider})
        .afterClosed()
        .subscribe(() => this.search())
      );
  }
}
