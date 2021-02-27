import {Component, OnInit} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import {MatDialog} from '@angular/material/dialog';
import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';
import {ArticleFamilyModel} from '../../shared/services/models/article-family.model';
import {SharedArticlesFamilyService} from '../../shared/services/shared.articles-family.service';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

@Component({
  selector: 'app-articles-family',
  templateUrl: './articles-family.component.html',
  styleUrls: ['./articles-family.component.css']
})
export class ArticlesFamilyComponent implements OnInit {
  TREE_DATA: ArticleFamilyModel[];
  treeControl = new NestedTreeControl<ArticleFamilyModel>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ArticleFamilyModel>();

  constructor(private sharedArticlesFamilyService: SharedArticlesFamilyService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.read();
  }

  hasChild = (_: number, node: ArticleFamilyModel) => !!node.children && node.children.length > 0;

  read(): void {
    this.sharedArticlesFamilyService.readWithoutArticles().subscribe(
      data => {
        this.TREE_DATA = data;
        this.dataSource.data = this.TREE_DATA;
      }
    );
  }

  createFamilyArticle(node: ArticleFamilyModel): any {
    // this.dialog.open()
  }

  editFamilyArticle(node: ArticleFamilyModel): any {
  }

  deleteFamilyArticle(node: ArticleFamilyModel): any {
    this.dialog.open(CancelYesDialogComponent).afterClosed().subscribe(
      result => {
        if (result) {
          this.sharedArticlesFamilyService.deleteFamilyArticle(node).subscribe(
            () => this.read()
          );
        }
      }
    );
  }
}

