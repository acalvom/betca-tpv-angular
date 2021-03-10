import {IssueState} from './issue-state.enum';

export class IssueSearch {
  title?: string;
  body?: string;
  labels?: string;
  state?: IssueState;
  milestone?: string;
  assignee?: string;
}
