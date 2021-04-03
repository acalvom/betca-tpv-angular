import {Injectable} from '@angular/core';
import {Article} from '../../shared/article.model';
import {TagService} from '../../shared/tag.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private tagService: TagService) {
  }

  searchSaleArticles(): Observable<Article[]> {
    // return of(this.popularArticles);
    return this.tagService.read('sale').pipe(map(tag => tag.articleList));
  }
}
