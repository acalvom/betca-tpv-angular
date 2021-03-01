import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Observable, of} from "rxjs";
import {ArticleFamilyModel} from "../../../shared/services/models/article-family.model";
import {SharedArticlesFamilyService} from "../../../shared/services/shared.articles-family.service";

@Component({
  selector: 'app-new-article-family-dialog',
  templateUrl: './new-article-family-dialog.component.html',
  styleUrls: ['./new-article-family-dialog.component.css']
})

export class NewArticleFamilyDialogComponent implements OnInit {

  reference: string;
  description: string;
  types: string[]
  selectedType: string

  constructor(private sharedArticlesFamilyService: SharedArticlesFamilyService) {
    this.types = ["ARTICLES","SIZE"];
  }

  ngOnInit(): void {
  }

  createArticlesFamily(): Observable<ArticleFamilyModel> {
    const articlesFamilyModel : ArticleFamilyModel = {
      reference : this.reference,
      description : this.description,
      type : this.selectedType,
    }

    return this.sharedArticlesFamilyService.createArticleFamily(articlesFamilyModel);
  }
}
