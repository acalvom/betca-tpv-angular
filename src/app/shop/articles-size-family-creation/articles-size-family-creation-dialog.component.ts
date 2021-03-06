import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-create',
  templateUrl: './articles-size-family-creation-dialog.component.html',
  styleUrls: ['./articles-size-family-creation.css']
})
export class ArticlesSizeFamilyCreationDialogComponent implements OnInit {

  constructor() { }
  form = {
    min: 0,
    max: 60,
  };
  letterOptions = ['xxs', 'xs', 's', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  ngOnInit(): void {
  }
  handleClickAddNumber(): void {
    this.form.max += 2;
  }
}
