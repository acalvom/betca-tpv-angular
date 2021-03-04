import {IssueState} from './issue-state.enum';

export class Issue {
  title: string;
  body: string;
  labels: string;
  state: IssueState;
  assignees: string;
  milestone: string;
  created_at: any;
}
