import {Component, OnInit} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import {MatDialog} from '@angular/material/dialog';
import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';
import {ArticleFamilyModel} from '../../shared/services/models/article-family.model';
import {SharedArticlesFamilyService} from '../../shared/services/shared.articles-family.service';
import {NewArticleFamilyDialogComponent} from './new-article-family-dialog/new-article-family-dialog.component';
import {EditArticleFamilyDialogComponent} from './edit-article-family-dialog/edit-article-family-dialog.component';
import {AddArticleDialogComponent} from './add-article-dialog/add-article-dialog.component';


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
  treeControl = new NestedTreeControl<ArticleFamilyModel>(node => node.articleFamilyCrudList);
  dataSource = new MatTreeNestedDataSource<ArticleFamilyModel>();

  constructor(private sharedArticlesFamilyService: SharedArticlesFamilyService, public dialog: MatDialog) {
    this.TREE_DATA = [];
  }

  ngOnInit(): void {
    this.read();
    console.log(this.TREE_DATA);
  }

  hasChild = (_: number, node: ArticleFamilyModel) => !!node.articleFamilyCrudList && node.articleFamilyCrudList.length > 0;

  read(): void {
    const reference = 'root';
    this.sharedArticlesFamilyService.readWithoutArticles(reference).subscribe(
      data => {
        this.TREE_DATA = [];
        this.TREE_DATA.push(data);
        this.dataSource.data = this.TREE_DATA;
        console.log(this.dataSource.data);
      }
    );
  }

  createFamilyArticle(node: ArticleFamilyModel): any {
    this.dialog.open(NewArticleFamilyDialogComponent, {data: node})
      .afterClosed().subscribe(
      result => {
        if (result) {
          this.read();
        }
      }
    );
  }

  editFamilyArticle(node: ArticleFamilyModel): any {
    this.dialog.open(EditArticleFamilyDialogComponent, {
      data: node
    }).afterClosed().subscribe(result => {
      if (result) {
        this.read();
      }
    });

  }

  deleteFamilyArticle(node: any): any {
    this.dialog.open(CancelYesDialogComponent).afterClosed().subscribe(
      result => {
        if (result) {
          this.sharedArticlesFamilyService.delete(node).subscribe(
            () => this.read()
          );
        }
      }
    );
  }

  addArticle(node: ArticleFamilyModel): any {
    this.dialog.open(AddArticleDialogComponent, {data: node}).afterClosed().subscribe(
      result => {
        if (result){
          this.read();
        }
      }
    );
  }
}

