import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {IssueSearch} from './issue-search.model';
import {Observable, of} from 'rxjs';
import {Issue} from './issue.model';
import {IssueState} from './issue-state.enum';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  static SEARCH = '/search';

  private issueMocks: Issue[] = [
    {
      id: 1,
      title: 'Found a bug',
      body: 'I\'m having a problem with this.',
      labels: 'bug',
      state: IssueState.OPEN,
      assignee: 'octocat',
      milestone: 'v1.0',
      created_at: '2011-04-10T20:09:31Z',
    },
    {
      id: 2,
      title: 'Enhancement',
      body: 'This could be improved.',
      labels: 'enhancement',
      state: IssueState.OPEN,
      assignee: 'kazlunn',
      milestone: 'v1.1',
      created_at: '2021-03-04T18:09:31Z',
    },
  ];

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

  read(id: number): Observable<Issue> {
    return of(this.issueMocks.find(mock => mock.id === id)); // TODO
  }
}
