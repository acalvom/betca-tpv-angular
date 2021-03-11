import {Injectable} from '@angular/core';
import {ArticleFamilyModel} from './models/article-family.model';
import {Observable, of} from 'rxjs';
import {ArticleFamilyViewModel} from '../../cashier-opened/shopping-cart/article-family-view/article-family-view.model';
import {EndPoints} from '@shared/end-points';
import {HttpService} from '@core/http.service';
import {TreetypeModel} from './models/treetype.model';

@Injectable({
  providedIn: 'root'
})
export class SharedArticlesFamilyService {
  ARTICLES_DATA: ArticleFamilyModel[] = [{
    reference: 'root',
    description: 'root',
    treeType: 'ARTICLES',
    articleFamilyCrudList: [{
      reference: 'Zz',
      description: 'Zz',
      treeType: 'ARTICLES',
      articleFamilyCrudList: [{
        reference: 'Zz Falda',
        description: 'Zz',
        treeType: 'ARTICLES'
      }]
    },
      {
        reference: 'Pantalon',
        description: 'T2',
        treeType: 'ARTICLE',
      }
    ]
  }
  ];

  ARTICLES_FAMILY_DATA: ArticleFamilyModel[] = [
    {
      reference: '1',
      description: 'Zarzuela',
      treeType: 'composite'
    },
    {
      reference: '1',
      description: 'Varios',
      treeType: 'composite',
    }
  ];

  CHILDRENS_OF_ZZ: ArticleFamilyViewModel[] = [
    {
      reference: '8400000000031',
      description: 'descrip-a3',
      type: TreetypeModel.ARTICLE,
      price: 10.12,
    },
    {
      reference: '1',
      description: 'Zz Falda',
      type: TreetypeModel.SIZES
    },
    {
      reference: '2',
      description: 'Zz Falda',
      type: TreetypeModel.SIZES
    }
  ];

  ARTICLES: ArticleFamilyViewModel [] = [
    {
      reference: '8400000000017',
      description: 'Zarzuela - falda T2',
      type: TreetypeModel.ARTICLE,
      price: 20,
    },
    {
      reference: '8400000000024',
      description: 'Zarzuela - falda T4',
      type: TreetypeModel.ARTICLE,
      price: 27.8,
    }
  ];

  constructor(private httpService: HttpService) {
  }

  readWithoutArticles(reference): Observable<ArticleFamilyModel> {
    return this.httpService
      .get(EndPoints.ARTICLES_FAMILY_CRUD + '/' + reference);

  }

  readChildren(reference?: string): Observable<ArticleFamilyViewModel[]> {
    return this.httpService
      .get(EndPoints.ARTICLES_FAMILY_VIEW + '/' + reference);
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
