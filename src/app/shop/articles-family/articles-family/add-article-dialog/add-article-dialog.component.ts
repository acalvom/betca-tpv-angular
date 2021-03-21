import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ArticleFamilyModel} from '../../../shared/services/models/article-family.model';
import {SharedArticlesFamilyService} from '../../../shared/services/shared.articles-family.service';
import {ArticleBarcodeWithParentReference} from '../article-barcode-with-parent-reference';

@Component({
  selector: 'app-add-article-dialog',
  templateUrl: './add-article-dialog.component.html',
  styleUrls: ['./add-article-dialog.component.css']
})
export class AddArticleDialogComponent {

  barcode: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ArticleFamilyModel, private articlesFamilyService: SharedArticlesFamilyService,
              private dialogRef: MatDialogRef<AddArticleDialogComponent>
  ) {
  }

  addArticleToFamily(): void {
    console.log(this.data);
    const articleBarcodeWithParentReference: ArticleBarcodeWithParentReference = {
      barcode: this.barcode,
      parentReference: this.data.reference
    };

    this.articlesFamilyService.addArticleToFamily(articleBarcodeWithParentReference).subscribe(
      result => {
        this.dialogRef.close(result);
      }
    );
  }

  addBarcode(barcode): void {
    this.barcode = barcode;
  }
}

