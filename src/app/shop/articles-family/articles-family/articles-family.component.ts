import {Component} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {ArticlesFamilyService} from '../articles-family.service';
import {ArticlesNode} from '../articles-node';
import {MatDialog} from '@angular/material/dialog';
import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

@Component({
  selector: 'app-articles-family',
  templateUrl: './articles-family.component.html',
  styleUrls: ['./articles-family.component.css']
})
export class ArticlesFamilyComponent {
  TREE_DATA: ArticlesNode[];
  treeControl = new NestedTreeControl<ArticlesNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ArticlesNode>();

  constructor(private articleFamilyService: ArticlesFamilyService, public dialog: MatDialog) {
    this.getData();
    this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: ArticlesNode) => !!node.children && node.children.length > 0;

  getData(): any {
    this.TREE_DATA = this.articleFamilyService.getData();
  }

  editNode(): any {
  }

  deleteNode(node: any): any {
    console.log(node);
    this.dialog.open(CancelYesDialogComponent).afterClosed().subscribe(
      result => {
        if (result) {
          this.articleFamilyService.delete();
        }
      }
    );
  }
}
