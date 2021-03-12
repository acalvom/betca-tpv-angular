import { Component, OnInit } from '@angular/core';
import {SharedArticlesFamilyService} from '../../../shared/services/shared.articles-family.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OpenSizesDialogComponent} from './open-sizes-dialog.component';
import {ArticleFamilyViewModel} from './article-family-view.model';

@Component({
  selector: 'app-article-family-view',
  templateUrl: './article-family-view.component.html',
  styleUrls: ['./article-family-view.component.css']
})
export class ArticleFamilyViewComponent implements OnInit {

  articlesFamily: ArticleFamilyViewModel [];

  constructor(private articlesFamilyService: SharedArticlesFamilyService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<ArticleFamilyViewComponent>) {
    this.articlesFamily = [];
  }

  ngOnInit(): void {
    this.articlesFamilyService.readChildren().subscribe(
      result => {
        this.articlesFamily = result;
      }
    );
  }

  updateArray(articleFamilyViewModel: ArticleFamilyViewModel): void {
    this.articlesFamilyService.readChildren(articleFamilyViewModel.reference).subscribe(
      result => {
        this.articlesFamily = result;
      }
    );
  }

  openSizes(articleFamilyViewModel: ArticleFamilyViewModel): void{
    let articlesFamilyViewModel: ArticleFamilyViewModel[] = [];
    this.articlesFamilyService.readChildren(articleFamilyViewModel.reference).subscribe(
      result => {
        articlesFamilyViewModel = result;
        this.dialog.open(OpenSizesDialogComponent, {
          data: articlesFamilyViewModel
        }).afterClosed().subscribe(resultDialog => {
          if (resultDialog !== true && resultDialog !== undefined) {
            this.dialogRef.close(resultDialog);
          }
        });
      }
    );
  }

  addShoppingCart(articleFamilyViewModel: ArticleFamilyViewModel): void {
    this.dialogRef.close(articleFamilyViewModel.barcode);
  }
}
