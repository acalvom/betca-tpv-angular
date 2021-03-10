import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ArticleFamilyViewModel} from './article-family-view.model';

@Component({
  templateUrl: 'open-sizes-dialog.component.html',
  styleUrls: ['open-sizes-dialog.component.css']
})
export class OpenSizesDialogComponent {

  articlesFamilyViewModel: ArticleFamilyViewModel[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ArticleFamilyViewModel[], private dialogRef: MatDialogRef<OpenSizesDialogComponent>) {
    this.articlesFamilyViewModel = this.data;
  }

  addShoppingCart(articleFamilyViewModel: ArticleFamilyViewModel): void {
    this.dialogRef.close(articleFamilyViewModel.reference);
  }

  obtainSize(articlesFamilyViewModel: ArticleFamilyViewModel): string {
    const description = articlesFamilyViewModel.description.split(' ');
    return description[description.length - 1];
  }
}
