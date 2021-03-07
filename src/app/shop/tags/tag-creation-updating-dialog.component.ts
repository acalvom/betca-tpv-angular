import {Component, Inject, OnInit} from '@angular/core';
import {Tag} from '../shared/services/models/tag.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {TagService} from './tag.service';

@Component({
  selector: 'app-tag-creation-updating-dialog',
  templateUrl: './tag-creation-updating-dialog.component.html',
  styleUrls: ['./tag-creation-updating-dialog.component.css']
})
export class TagCreationUpdatingDialogComponent implements OnInit {
  tag: Tag;
  title: string;
  oldName: string;
  constructor(@Inject(MAT_DIALOG_DATA) data: Tag, private tagService: TagService, private dialog: MatDialog) {
    this.title = data ? 'Update Tag' : 'Create Tag';
    this.tag = data ? data : {
      name: undefined, group: undefined, description: undefined, articles: []
    };
    this.oldName = data ? data.name : undefined;
  }

  ngOnInit(): void {
  }

  isCreate(): boolean {
    return this.oldName === undefined;
  }

  create(): void {
    this.tagService
      .create(this.tag)
      .subscribe(() => this.dialog.closeAll());
  }

  update(): void {
    this.tagService
      .update(this.oldName, this.tag)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.tag.name) || this.check(this.tag.group) || this.check(this.tag.description);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }

}
