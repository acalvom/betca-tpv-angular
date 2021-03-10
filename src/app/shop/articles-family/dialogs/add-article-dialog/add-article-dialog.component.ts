import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ArticleFamilyModel} from '../../../shared/services/models/article-family.model';
import {SharedArticlesFamilyService} from '../../../shared/services/shared.articles-family.service';

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
    this.articlesFamilyService.addArticleToFamily(this.data, this.barcode).subscribe(
      result => {
        this.dialogRef.close(result);
      }
    );
  }

  addBarcode(barcode): void {
    this.barcode = barcode;
  }
}

