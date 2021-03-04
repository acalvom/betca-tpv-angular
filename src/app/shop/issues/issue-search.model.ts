import {IssueState} from './issue-state.enum';

export class IssueSearch {
  state?: IssueState;
  milestone?: string;
  assignee?: string;
  labels?: string;
}
