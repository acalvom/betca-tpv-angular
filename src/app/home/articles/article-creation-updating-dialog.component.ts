import {Component, Inject} from '@angular/core';
import {ArticleService} from './article.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Article} from './article.model';

@Component({
  templateUrl: 'article-creation-updating-dialog.component.html',
  styleUrls: ['article-dialog.component.css']
})

export class ArticleCreationUpdatingDialogComponent {
  article: Article;
  title: string;
  oldBarcode: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: Article, private providerService: ArticleService, private dialog: MatDialog) {
    this.title = data ? 'Update Article' : 'Create Article';
    this.article = data ? data : {barcode: undefined, description: undefined, retailPrice: undefined, providerCompany: undefined};
    this.oldBarcode = data ? data.barcode : undefined;
  }

  isCreate(): boolean {
    return this.oldBarcode === undefined;
  }

  create(): void {
    this.providerService.create(this.article).subscribe(
      () => this.dialog.closeAll()
    );
  }

  update(): void {
    this.providerService.update(this.oldBarcode, this.article).subscribe(
      () => this.dialog.closeAll()
    );
  }

  invalid(): boolean {
    return this.check(this.article.barcode) || this.check(this.article.description) || this.check(this.article.providerCompany)
      || (this.article.retailPrice === undefined || null);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
