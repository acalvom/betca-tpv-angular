import { Component, OnInit } from '@angular/core';
import {SharedArticlesFamilyService} from "../../../shared/services/shared.articles-family.service";
import {ArticleFamilyModel} from "../../../shared/services/models/article-family.model";
import {Article} from "../../../shared/services/models/article.model";
import {MatDialog} from "@angular/material/dialog";
import {OpenSizesDialogComponent} from "./open-sizes-dialog.component";

@Component({
  selector: 'app-article-family-view',
  templateUrl: './article-family-view.component.html',
  styleUrls: ['./article-family-view.component.css']
})
export class ArticleFamilyViewComponent implements OnInit {

  cardData: (ArticleFamilyModel | Article)[];

  constructor(private articlesFamilyService: SharedArticlesFamilyService, private dialog: MatDialog) {
    this.cardData = [];
  }

  ngOnInit(): void {
    this.articlesFamilyService.readChildren().subscribe(
      result=>{
        this.cardData = result;
      }
    )
  }

  updateArray(articleFamily: ArticleFamilyModel): void {
    this.articlesFamilyService.readChildrenTemporal(articleFamily).subscribe(
      result=> {
        this.cardData = result;
      }
    );
  }

  openSizes(articleFamily: ArticleFamilyModel): void {
    let sizes: String[] = [];
    /*this.articlesFamilyService.readSizes(articleFamily).subscribe(
      result=>{
        sizes = result;
      }
    )*/
    this.dialog.open(OpenSizesDialogComponent, {
      data: sizes
    });
  }
}
