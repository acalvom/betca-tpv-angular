import {IssueState} from './issue-state.enum';

export class Issue {
  id: number;
  title: string;
  labels: string;
  state: IssueState;
  body: string;
  assignee: string;
  milestone: string;
  // tslint:disable-next-line:variable-name
  created_at: string;
}
