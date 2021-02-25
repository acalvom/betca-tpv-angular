import { Injectable } from '@angular/core';
import {ArticlesNode} from "./articles-node";

@Injectable({
  providedIn: 'root'
})
export class ArticlesFamilyService {
    ARTICLES_DATA: ArticlesNode[] = [{
    id: '1',
    name: 'ArticleFamily-Root',
    children: [{
      id: '2',
      name: 'ArticleFamily-Sub1',
      children: [{
        id: '1',
        name: 'ArticleFamily-Sub1-Sub1',
      }]
    },
      {
        id: '3',
        name: 'ArticleFamily-Sub2',
      }]
  }];
  constructor() {
  }

  getData(): ArticlesNode[] {
    return this.ARTICLES_DATA;
  }

  create(){

  }

  edit(){

  }

  delete(nodeId: number){

  }
}
