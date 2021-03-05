import {Injectable} from '@angular/core';
import {ArticleFamilyModel} from './models/article-family.model';
import {Observable, of} from 'rxjs';
import {Article} from './models/article.model';

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

  CHILDRENS_OF_ZZ: (ArticleFamilyModel | Article)[] = [
    {
      barcode: '8400000000031',
      description: 'descrip-a3',
      retailPrice: 10.12,
      providerCompany: 'pro1'
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

  ARTICLES: Article [] = [
    {
      barcode: '8400000000017',
      description: 'zz-falda-T2',
      retailPrice: 20,
      providerCompany: 'pro1'
    },
    {
      barcode: '8400000000024',
      description: 'zz-falda-T4',
      retailPrice: 27.8,
      providerCompany: 'pro1'
    }
  ];

  constructor() {
  }

  readWithoutArticles(): Observable<ArticleFamilyModel[]> {
    return of(this.ARTICLES_DATA);

  }

  readChildren(articleFamilyModel?: ArticleFamilyModel): Observable<(ArticleFamilyModel | Article)[]> {
    return of(this.ARTICLES_FAMILY_DATA);
  }

  readChildrenTemporal(articleFamilyModel?: ArticleFamilyModel): Observable<(ArticleFamilyModel | Article)[]> {
    return of(this.CHILDRENS_OF_ZZ);
  }

  readArticles(articleFamily: ArticleFamilyModel): Observable<Article[]> {
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
