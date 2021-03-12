import {Injectable} from '@angular/core';
import {ArticleFamilyModel} from './models/article-family.model';
import {Observable, of} from 'rxjs';
import {ArticleFamilyViewModel} from '../../cashier-opened/shopping-cart/article-family-view/article-family-view.model';
import {EndPoints} from '@shared/end-points';
import {HttpService} from '@core/http.service';

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
