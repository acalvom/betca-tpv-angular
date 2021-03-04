import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {IssueSearch} from './issue-search.model';
import {Observable, of} from 'rxjs';
import {Issue} from './issue.model';
import {IssueState} from './issue-state.enum';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issueMocks: Issue[] = [
    {
      title: 'Found a bug',
      body: 'I\'m having a problem with this.',
      labels: 'bug',
      state: IssueState.OPEN,
      assignees: 'octocat',
      milestone: 'v1.0',
      created_at: '2011-04-10T20:09:31Z',
    },
    {
      title: 'Enhancement',
      body: 'This could be improved.',
      labels: 'enhancement',
      state: IssueState.OPEN,
      assignees: 'kazlunn',
      milestone: 'v1.1',
      created_at: '2021-03-04T18:09:31Z',
    },
  ];

  constructor(private httpService: HttpService) {
  }

  search(issueSearch: IssueSearch): Observable<Issue[]> {
    return of(this.issueMocks); // TODO
  }

  create(issue: Issue): Observable<Issue> {
    return of(issue); // TODO
  }
}
