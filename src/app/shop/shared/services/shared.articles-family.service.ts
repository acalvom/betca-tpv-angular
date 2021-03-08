import {Injectable} from '@angular/core';
import {ArticleFamilyModel} from './models/article-family.model';
import {Observable, of} from 'rxjs';
import {Article} from './models/article.model';
import {ArticleFamilyViewModel} from "../../cashier-opened/shopping-cart/article-family-view/article-family-view.model";

@Injectable({
  providedIn: 'root'
})
export class SharedArticlesFamilyService {
  ARTICLES_DATA: ArticleFamilyModel[] = [{
    reference: 'root',
    description: 'root',
    type: 'ARTICLES',
    children: [{
      reference: 'Zz',
      description: 'Zz',
      type: 'ARTICLES',
      children: [{
        reference: 'Zz Falda',
        description: 'Zz',
        type: 'ARTICLES'
      }]
    },
      {
        reference: 'Pantalon',
        description: 'T2',
        type: 'ARTICLE',
      }
    ]
  }
  ];

  ARTICLES_FAMILY_DATA: ArticleFamilyModel[] = [
    {
      reference: '1',
      description: 'Zarzuela',
      type: 'composite'
    },
    {
      reference: '1',
      description: 'Varios',
      type: 'composite',

    }
  ];

  CHILDRENS_OF_ZZ: ArticleFamilyViewModel[] = [
    {
      reference: '8400000000031',
      description: 'descrip-a3',
      type: 'article',
      price: 10.12,
    },
    {
      reference: '1',
      description: 'Zz Falda',
      type: 'size'
    },
    {
      reference: '1',
      description: 'Zz Falda',
      type: 'size'
    }
  ];

  ARTICLES: ArticleFamilyViewModel [] = [
    {
      reference: '8400000000017',
      description: 'Zarzuela - falda T2',
      type: 'article',
      price: 20,
    },
    {
      reference: '8400000000024',
      description: 'Zarzuela - falda T4',
      type: 'article',
      price: 27.8,
    }
  ];

  constructor() {
  }

  readWithoutArticles(): Observable<ArticleFamilyModel[]> {
    return of(this.ARTICLES_DATA);

  }

  readChildren(articleFamilyViewModel?: ArticleFamilyModel): Observable<ArticleFamilyViewModel[]> {
    return of(this.ARTICLES_FAMILY_DATA);
  }

  readChildrenTemporal(articleFamilyViewModel?: ArticleFamilyModel): Observable<ArticleFamilyViewModel[]> {
    return of(this.CHILDRENS_OF_ZZ);
  }

  readArticles(articleFamilyViewModel: ArticleFamilyViewModel): Observable<ArticleFamilyViewModel[]> {
    return of(this.ARTICLES);
  }

  createArticleFamily(articleFamilyModel: ArticleFamilyModel, reference: string): Observable<string> {
    return of(articleFamilyModel + ' ref:' + reference);
  }

  editArticleFamily(articleFamilyModel: ArticleFamilyModel): Observable<ArticleFamilyModel> {
    return of(articleFamilyModel);
  }

  deleteFamilyArticle(node: ArticleFamilyModel): Observable<void> {
    return of(console.log('Offer ' + node.reference + 'deleted successfully'));
  }

  addArticleToFamily(articleFamilyModel: ArticleFamilyModel, barcode: string): Observable<void> {
    return of(console.log('Parent Reference: ' + articleFamilyModel.reference + 'Barcode product: ' + barcode));

  }
}
