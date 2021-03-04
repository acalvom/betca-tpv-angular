import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {IssueSearch} from './issue-search.model';
import {Observable, of} from 'rxjs';
import {Issue} from './issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpService: HttpService) {
  }

  search(issueSearch: IssueSearch): Observable<Issue[]> {
    return of([]); // TODO
  }
}
