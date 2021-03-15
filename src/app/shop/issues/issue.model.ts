import {IssueState} from './issue-state.enum';

export class Issue {
  id: number;
  title: string;
  body: string;
  labels: string;
  state: IssueState;
  assignee: string;
  milestone: string;
  // tslint:disable-next-line:variable-name
  created_at: string;
}
