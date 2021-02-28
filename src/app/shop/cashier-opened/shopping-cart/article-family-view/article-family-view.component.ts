import { Component, OnInit } from '@angular/core';
import {SharedArticlesFamilyService} from "../../../shared/services/shared.articles-family.service";
import {ArticleFamilyModel} from "../../../shared/services/models/article-family.model";
import {Article} from "../../../shared/services/models/article.model";

@Component({
  selector: 'app-article-family-view',
  templateUrl: './article-family-view.component.html',
  styleUrls: ['./article-family-view.component.css']
})
export class ArticleFamilyViewComponent implements OnInit {

  cardData: (ArticleFamilyModel | Article)[];

  constructor(private articlesFamilyService: SharedArticlesFamilyService) {
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

  }
}
