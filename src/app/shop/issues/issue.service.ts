import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {IssueSearch} from './issue-search.model';
import {Observable, of} from 'rxjs';
import {Issue} from './issue.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  search(issueSearch: IssueSearch): Observable<Issue[]> {
    return this.httpService
      .paramsFrom(issueSearch)
      .get(EndPoints.ISSUES + IssueService.SEARCH);
  }

  create(issue: Issue): Observable<Issue> {
    return of(issue); // TODO
  }

  // tslint:disable-next-line:variable-name
  read(number: number): Observable<Issue> {
    return this.httpService.get(EndPoints.ISSUES + '/' + number);
  }
}
