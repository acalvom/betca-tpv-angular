import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../shared/services/models/article.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TagArticleService {
  articles = of([]);

  constructor() {
  }
  refresh(): Observable<Article[]> {
    this.articles = of([]);
    return this.articles;
  }
  create(article: Article): Observable<Article> {
    return this.articles.pipe(map(articles => {
        articles.push(article);
        return article;
      }
      )
    );
  }

  read(barcode: string): Observable<Article> {
    return this.articles.pipe(map(articles =>
      articles.find(articleItem => articleItem.barcode === barcode))
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

  delete(article: Article): Observable<Article> {
    return this.articles.pipe(map(articles => {
        const index = articles.findIndex(articleItem => articleItem.barcode === article.barcode);
        articles.splice(index, 1);
        return article;
      }
      )
    );
  }

  init(articleList: Article[]): void {
    this.articles = of(articleList);
  }
}
