import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Article} from '../../../shared/services/models/article.model';

@Component({
  templateUrl: 'open-sizes-dialog.component.html',
  styleUrls: ['open-sizes-dialog.component.css']
})
export class OpenSizesDialogComponent {

  articles: Article[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Article[], private dialogRef: MatDialogRef<OpenSizesDialogComponent>) {
    this.articles = this.data;
  }

  addShoppingCart(article: Article): void {
    this.dialogRef.close(article);
  }

  obtainSize(article: Article): string {
    const description = article.description.split('-');
    return description[description.length - 1];
  }
}
