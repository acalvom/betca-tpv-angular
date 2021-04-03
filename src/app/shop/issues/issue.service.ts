import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {IssueSearch} from './issue-search.model';
import {Observable} from 'rxjs';
import {Issue} from './issue.model';
import {EndPoints} from '@shared/end-points';
import {IssueCreation} from './issue-creation.model';

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

  create(issueCreation: IssueCreation): Observable<Issue> {
    return this.httpService.post(EndPoints.ISSUES, issueCreation);
  }

  // tslint:disable-next-line:variable-name
  read(number: number): Observable<Issue> {
    return this.httpService.get(EndPoints.ISSUES + '/' + number);
  }
}
