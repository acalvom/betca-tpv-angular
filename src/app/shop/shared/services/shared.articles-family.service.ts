import {Injectable} from '@angular/core';
import {ArticleFamilyModel} from './models/article-family.model';

@Injectable({
  providedIn: 'root'
})
export class SharedArticlesFamilyService {
  ARTICLES_DATA: ArticleFamilyModel[] = [{
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

  getData(): ArticleFamilyModel[] {
    return this.ARTICLES_DATA;
  }

  create(): any {

  }

  edit(): any {

  }

  delete(): any {

  }
}
