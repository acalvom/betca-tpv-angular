import { Component, OnInit } from '@angular/core';
import {SharedArticlesFamilyService} from '../../../shared/services/shared.articles-family.service';
import {ArticleFamilyModel} from '../../../shared/services/models/article-family.model';
import {Article} from '../../../shared/services/models/article.model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OpenSizesDialogComponent} from './open-sizes-dialog.component';

@Component({
  selector: 'app-article-family-view',
  templateUrl: './article-family-view.component.html',
  styleUrls: ['./article-family-view.component.css']
})
export class ArticleFamilyViewComponent implements OnInit {

  articlesFamily: (ArticleFamilyModel | Article)[];

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

  updateArray(articleFamily: ArticleFamilyModel): void {
    this.articlesFamilyService.readChildrenTemporal(articleFamily).subscribe(
      result => {
        this.articlesFamily = result;
      }
    );
  }

  openSizes(articleFamily: ArticleFamilyModel): void{
    let articles: Article[] = [];
    this.articlesFamilyService.readArticles(articleFamily).subscribe(
      result => {
        articles = result;
      }
    );
    this.dialog.open(OpenSizesDialogComponent, {
      data: articles
    }).afterClosed().subscribe(result => {
      if (result !== true && result !== undefined) {
        this.dialogRef.close(result);
      }
    });
  }

  addShoppingCart(article: Article): void {
    this.dialogRef.close(article);
  }
}
