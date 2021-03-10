import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ArticleSizeFamily } from '../shared/services/models/article-size-family.model';
import { Tax } from '../shared/services/models/Tax';
import { ArticlesSizeFamilyCreationService } from './articles-size-family-creation.service';

@Component({
  selector: 'app-articles-size-family-creation',
  templateUrl: './articles-size-family-creation-dialog.component.html',
  styleUrls: ['./articles-size-family-creation-dialog.component.css'],
})
export class ArticlesSizeFamilyCreationDialogComponent implements OnInit {
  taxValues = Object.keys(Tax).filter((key) => isNaN(Number(key)));
  articleSizeFamily: ArticleSizeFamily;
  companies: Observable<string[]> = of([]);

  constructor(
    @Inject(MAT_DIALOG_DATA) data: ArticleSizeFamily,
    private articleSizeFamilyCreationService: ArticlesSizeFamilyCreationService,
    private dialog: MatDialog) {
    this.articleSizeFamily = data ? data : {
      description: undefined,
      retailPrice: undefined,
      providerCompany: undefined,
      size: undefined,
      tax: Tax.GENERAL,
    };
  }

  form = {
    addNumber: 1,
    min: 0,
    max: 60,
    letterMin: 'XSS',
    letterMax: 'Especial',
  };
  letterOptions = ['XSS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Especial'];
  ngOnInit(): void {}
  handleClickAddNumber(): void {
    const newMax = this.form.max + this.form.addNumber;
    const newMin = this.form.min + this.form.addNumber;
    if (newMax <= 60) {
      this.form.max += this.form.addNumber;
    }
    if (newMin <= 60) {
      this.form.min += this.form.addNumber;
    }
  }

  create(): void {
    this.articleSizeFamilyCreationService
      .create(this.articleSizeFamily)
      .subscribe(() => this.dialog.closeAll());
  }
}
