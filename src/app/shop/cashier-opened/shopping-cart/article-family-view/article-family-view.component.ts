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

  updateArray(articleFamily: ArticleFamilyViewModel): void {
    this.articlesFamilyService.readChildrenTemporal(articleFamily).subscribe(
      result => {
        this.articlesFamily = result;
      }
    );
  }

  openSizes(articleFamily: ArticleFamilyViewModel): void{
    let articlesFamilyViewModel: ArticleFamilyViewModel[] = [];
    this.articlesFamilyService.readArticles(articleFamily).subscribe(
      result => {
        articlesFamilyViewModel = result;
      }
    );
    this.dialog.open(OpenSizesDialogComponent, {
      data: articlesFamilyViewModel
    }).afterClosed().subscribe(result => {
      if (result !== true && result !== undefined) {
        this.dialogRef.close(result);
      }
    });
  }

  addShoppingCart(articleFamilyViewModel: ArticleFamilyViewModel): void {
    this.dialogRef.close(articleFamilyViewModel.reference);
  }
}
