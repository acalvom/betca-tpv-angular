import {Injectable} from '@angular/core';
import {ArticleFamilyModel} from './models/article-family.model';
import {Observable} from 'rxjs';
import {ArticleFamilyViewModel} from '../../cashier-opened/shopping-cart/article-family-view/article-family-view.model';
import {EndPoints} from '@shared/end-points';
import {HttpService} from '@core/http.service';
import {ArticleBarcodeWithParentReference} from '../../articles-family/articles-family/article-barcode-with-parent-reference';

@Injectable({
  providedIn: 'root'
})
export class SharedArticlesFamilyService {

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

  createArticleFamily(articleFamilyModel: ArticleFamilyModel): Observable<string> {
    return this.httpService
      .post(EndPoints.ARTICLES_FAMILY_CRUD, articleFamilyModel);
  }

  editArticleFamily(articleFamilyModel: ArticleFamilyModel): Observable<ArticleFamilyModel> {
    return this.httpService.put(EndPoints.ARTICLES_FAMILY_CRUD, articleFamilyModel);
  }

  delete(node: ArticleFamilyModel): Observable<void> {
    return this.httpService
      .delete(EndPoints.ARTICLES_FAMILY_CRUD + '/' + node.id);
  }

  addArticleToFamily(articleBarcodeWithParentReference: ArticleBarcodeWithParentReference): Observable<void> {
    return this.httpService.post(EndPoints.SINGLE_ARTICLES_FAMILY_CRUD, articleBarcodeWithParentReference);
  }
}
