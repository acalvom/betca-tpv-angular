import { Component } from '@angular/core';
import {of} from 'rxjs';
import {TagSearch} from './tag-search.model';
import {MatDialog} from '@angular/material/dialog';
import {TagCreationUpdatingDialogComponent} from './tag-creation-updating-dialog.component';
import {Tag} from '../shared/services/models/tag.model';
import {TagService} from './tag.service';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {ArticleCreationUpdatingDialogComponent} from '../articles/article-creation-updating-dialog.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tagSearch: TagSearch;
  title = 'Tags management';
  tags = of([]);

  constructor(private dialog: MatDialog, private tagService: TagService) {
    this.resetSearch();
  }

  search(): void {
    this.tags = this.tagService.search(this.tagSearch);
  }

  resetSearch(): void {
    this.tagSearch = {};
  }

  unfinished(): void {
    this.tags = this.tagService.searchUnfinished();
  }

  create(): void {
    this.dialog.open(TagCreationUpdatingDialogComponent);
  }

  update(tag: Tag): void {
    this.tagService.read(tag.name)
      .subscribe(fullTag => this.dialog.open(TagCreationUpdatingDialogComponent, {data: fullTag}));
  }

  read(tag: Tag): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Tag Details',
        object: this.tagService.read(tag.name)
      }
    });
  }
}
