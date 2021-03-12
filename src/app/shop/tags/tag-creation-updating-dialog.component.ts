import {Component, Inject, OnInit} from '@angular/core';
import {Tag} from '../shared/services/models/tag.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {TagService} from './tag.service';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {Article} from '../shared/services/models/article.model';
import {ArticleService} from '../articles/article.service';
import {TagArticleCreationUpdatingDialogComponent} from './tag-article-creation-updating-dialog.component';
import {of} from 'rxjs';
import {TagArticleService} from './tag-article.service';

@Component({
  selector: 'app-tag-creation-updating-dialog',
  templateUrl: './tag-creation-updating-dialog.component.html',
  styleUrls: ['./tag-creation-updating-dialog.component.css']
})
export class TagCreationUpdatingDialogComponent {
  tag: Tag;
  title: string;
  oldName: string;
  tittleArticle: string;
  articles = of([]);

  constructor(@Inject(MAT_DIALOG_DATA) data: Tag, private tagService: TagService, private tagArticleService: TagArticleService,
              private dialog: MatDialog) {
    this.title = data ? 'Update Tag' : 'Create Tag';
    this.tittleArticle = data ? 'Update Article' : 'Add Article';
    this.tag = data ? data : {
      name: undefined, group: undefined, description: undefined, articles: []
    };
    this.oldName = data ? data.name : undefined;
  }

  isCreate(): boolean {
    return this.oldName === undefined;
  }
  readArticle(article: Article): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Article Details',
        object: article
      }
    });
  }
  updateArticle(article: Article): void {
      this.dialog.open(TagArticleCreationUpdatingDialogComponent, { data: article}).afterClosed().subscribe(() =>
        this.searchArticle()
      );
  }
  addArticle(): void {
    this.dialog.open(TagArticleCreationUpdatingDialogComponent).afterClosed().subscribe(() =>
      this.searchArticle()
    );
  }
  searchArticle(): void {
    this.articles = this.tagArticleService.search();
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
