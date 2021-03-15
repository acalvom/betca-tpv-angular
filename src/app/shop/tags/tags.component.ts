import {Component} from '@angular/core';
import {of} from 'rxjs';
import {TagSearch} from './tag-search.model';
import {MatDialog} from '@angular/material/dialog';
import {TagCreationUpdatingDialogComponent} from './tag-creation-updating-dialog.component';
import {Tag} from '../shared/services/models/tag.model';
import {TagService} from './tag.service';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {map} from 'rxjs/operators';

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
    this.tags = this.tagService.search(this.tagSearch).pipe(map(tags =>
      tags.map(tag => {
          return {
            name: tag.name,
            group: tag.group,
            description: tag.description
          };
        }
      )
    ));
  }

  resetSearch(): void {
    this.tagSearch = {};
  }

  create(): void {
    this.dialog.open(TagCreationUpdatingDialogComponent).afterClosed().subscribe(() =>
      this.search()
    );
  }

  update(tag: Tag): void {
    this.tagService.read(tag.name)
      .subscribe(fullTag => this.dialog.open(TagCreationUpdatingDialogComponent, {data: fullTag}).afterClosed().subscribe(() =>
        this.search()
      ));
  }

  read(tag: Tag): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Tag Details',
        object: of(tag)
      }
    });
  }
}
