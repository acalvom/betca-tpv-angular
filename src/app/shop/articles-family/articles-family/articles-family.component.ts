import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {ArticlesFamilyService} from "../articles-family.service";
import {ArticlesNode} from "../articles-node";
import {MatDialog} from "@angular/material/dialog";
import {CancelYesDialogComponent} from "@shared/dialogs/cancel-yes-dialog.component";


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
  TREE_DATA : ArticlesNode[];
  treeControl = new NestedTreeControl<ArticlesNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ArticlesNode>();

  constructor(private articleFamilyService: ArticlesFamilyService, public dialog: MatDialog) {
    this.getData();
    this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: ArticlesNode) => !!node.children && node.children.length > 0;

  getData(){
    this.TREE_DATA = this.articleFamilyService.getData();
  }

  searchTree(element, id){
    if(element.title == id){
      return element;
    }else if (element.children != null){
      var i;
      var result = null;
      for(i=0; result == null && i < element.children.length; i++){
        result = this.searchTree(element.children[i], id);
      }
      return result;
    }
    return null;
  }

  editNode(){
  }

  deleteNode(node: any){
    console.log(node);
    const dialogRef = this.dialog.open(CancelYesDialogComponent).afterClosed().subscribe(
      result=>{
        if(result){
          this.articleFamilyService.delete(node)
        }
      }
    )
  }
}
