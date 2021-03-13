import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SharedArticleService} from '../shared/services/shared.article.service';
import {TagArticleService} from './tag-article.service';

@Component({
  selector: 'app-tag-article-creation-updating-dialog',
  templateUrl: './tag-article-creation-updating-dialog.component.html',
  styleUrls: ['./tag-article-creation-updating-dialog.component.css']
})
export class TagArticleCreationUpdatingDialogComponent {
  title: string;
  barcode: string;
  oldBarcode: string;
  error: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) data: string, private sharedArticleService: SharedArticleService,
              private tagArticleService: TagArticleService, private dialog: MatDialogRef<TagArticleCreationUpdatingDialogComponent>) {
    this.title = data ? 'Update Article' : 'Add Article';
    this.barcode = data ? data : undefined;
    this.oldBarcode = data ? data : undefined;
    this.error = false;
  }

  create(): void {
    this.tagArticleService.read(this.barcode).subscribe(articleRead => {
        if (!articleRead) {
          this.sharedArticleService.read(this.barcode).subscribe(article => {
            this.tagArticleService
              .create(article)
              .subscribe(() => this.dialog.close());
            this.error = false;
          });
        } else {
          this.error = true;
        }
      }
    );
  }

  isCreate(): boolean {
    return this.oldBarcode === undefined;
  }

  invalid(): boolean {
    return this.check(this.barcode) && !this.error;
  }

  update(): void {
    this.sharedArticleService.read(this.barcode).subscribe(article => {
      this.tagArticleService
        .update(this.oldBarcode, article)
        .subscribe(() => this.dialog.close());
    });
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }

  addBarcode(barcode: string): void {
    this.barcode = barcode;
  }
}
