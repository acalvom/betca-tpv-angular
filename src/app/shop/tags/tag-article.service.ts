import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {Tag} from '../shared/services/models/tag.model';
import {EndPoints} from '@shared/end-points';
import {TagSearch} from './tag-search.model';
import {Article} from '../shared/services/models/article.model';
import {find, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TagArticleService {
  articles = of([]);

  constructor() {
  }

  create(article: Article): Observable<Article> {
    return this.articles.pipe(map(articles => {
          console.log(articles);
          articles.push(article);
          return article;
        }
      )
    );
  }
  read(barcode: string): Observable<Article> {
    return this.articles.pipe(map(articles =>
      articles.find( articleItem => articleItem.barcode === barcode))
    );
  }
  update(oldBarcode: string, article: Article): Observable<Article> {
    return this.articles.pipe(map(articles => {
          const index = articles.findIndex(articleItem => articleItem.barcode === oldBarcode);
          articles[index] = article;
          return article;
        }
      )
    );
  }
  search(): Observable<Article[]> {
    return this.articles.pipe(map(articles => articles));
  }
}
