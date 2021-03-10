import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ArticleFamilyModel} from '../../../shared/services/models/article-family.model';
import {SharedArticlesFamilyService} from '../../../shared/services/shared.articles-family.service';

@Component({
  selector: 'app-edit-article-family-dialog',
  templateUrl: './edit-article-family-dialog.component.html',
  styleUrls: ['./edit-article-family-dialog.component.css']
})
export class EditArticleFamilyDialogComponent implements OnInit {

  reference: string;
  description: string;
  types: string[];
  selectedType: string;


  constructor(@Inject(MAT_DIALOG_DATA) public selectedArticle: ArticleFamilyModel,
              private articlesFamilyService: SharedArticlesFamilyService,
              private dialogRef: MatDialogRef<EditArticleFamilyDialogComponent>
  ) {
    this.reference = selectedArticle.reference;
    this.description = selectedArticle.description;
    this.selectedType = selectedArticle.treeType;
    this.types = ['ARTICLES', 'SIZE'];
  }

  ngOnInit(): void {

  }

  updateArticlesFamily(): void {
    const articlesFamilyModel: ArticleFamilyModel = {
      reference: this.reference,
      description: this.description,
      treeType: this.selectedType,
    };

    this.articlesFamilyService.editArticleFamily(articlesFamilyModel).subscribe(
      result => {
        this.dialogRef.close(result);
      }
    );
  }
  changeSelection(value: any): void {
    this.selectedType = value;
  }
}
