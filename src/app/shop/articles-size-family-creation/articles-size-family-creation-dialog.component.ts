import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Observable, of} from 'rxjs';
import {ArticleSizeFamily} from '../shared/services/models/article-size-family.model';
import {Tax} from '../shared/services/models/Tax';
import {ArticlesSizeFamilyCreationService} from './articles-size-family-creation.service';


@Component({
  selector: 'app-articles-size-family-creation',
  templateUrl: './articles-size-family-creation-dialog.component.html',
  styleUrls: ['./articles-size-family-creation-dialog.component.css']
})
export class ArticlesSizeFamilyCreationDialogComponent implements OnInit {
  taxValues = Object.keys(Tax).filter(key => isNaN(Number(key)));
  articleSizeFamily: ArticleSizeFamily;
  companies: Observable<string[]> = of([]);

  constructor(@Inject(MAT_DIALOG_DATA) data: ArticleSizeFamily,
              private articleSizeFamilyCreationService: ArticlesSizeFamilyCreationService, private dialog: MatDialog) {
    this.articleSizeFamily = data ? data : {
      description: undefined, retailPrice: undefined, providerCompany: undefined,
      size: undefined, tax: Tax.GENERAL
    };
  }

  form = {
    min: 0,
    max: 60,
  };
  letterOptions = ['XSS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Especial'];
  ngOnInit(): void {
  }
  handleClickAddNumber(): void {
    this.form.max += 2;
  }

  create(): void {
    this.articleSizeFamilyCreationService
      .create(this.articleSizeFamily)
      .subscribe(() => this.dialog.closeAll());
  }
}
