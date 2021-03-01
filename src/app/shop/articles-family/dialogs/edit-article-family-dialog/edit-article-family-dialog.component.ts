import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ArticleFamilyModel} from "../../../shared/services/models/article-family.model";
import {SharedArticlesFamilyService} from "../../../shared/services/shared.articles-family.service";

@Component({
  selector: 'app-edit-article-family-dialog',
  templateUrl: './edit-article-family-dialog.component.html',
  styleUrls: ['./edit-article-family-dialog.component.css']
})
export class EditArticleFamilyDialogComponent implements OnInit {

  reference: string;
  description: string;
  types: string[]
  typeSelected: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ArticleFamilyModel, private articlesFamilyService : SharedArticlesFamilyService) {
    this.reference = data.reference;
    this.description = data.description;
    this.typeSelected = data.type;

    this.types = ["ARTICLES","SIZE"];
  }

  ngOnInit(): void {

  }

  updateArticlesFamily() {
    const articlesFamilyModel : ArticleFamilyModel = {
      reference : this.reference,
      description : this.description,
      type : this.typeSelected,
    }

    return this.articlesFamilyService.editArticleFamily(articlesFamilyModel);
  }
}
