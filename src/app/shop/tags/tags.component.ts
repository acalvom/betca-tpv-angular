import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {TagSearch} from './tag-search.model';
import {MatDialog} from '@angular/material/dialog';
import {TagCreationUpdatingDialogComponent} from './tag-creation-updating-dialog.component';
import {Tag} from '../shared/services/models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tagSearch: TagSearch;
  title = 'Tags management';
  tags = of([]);
  constructor(private dialog: MatDialog) {
    this.resetSearch();
  }

  ngOnInit(): void {
  }
  search(): void {
  }
  resetSearch(): void {
    this.tagSearch = {};
  }
  create(): void {
    this.dialog.open(TagCreationUpdatingDialogComponent);
  }
  update(tag: Tag): void {
  }
  read(tag: Tag): void {
  }
}
