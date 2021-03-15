import {Component, OnInit} from '@angular/core';
import {Issue} from '../issue.model';
import {IssueService} from '../issue.service';
import {MatDialog} from '@angular/material/dialog';
import {IssueLabel} from '../issue-label.enum';
import {IssueState} from '../issue-state.enum';

@Component({
  selector: 'app-issue-creation-dialog',
  templateUrl: './issue-creation-dialog.component.html',
  styleUrls: ['./issue-creation-dialog.component.css']
})
export class IssueCreationDialogComponent implements OnInit {
  title = 'Issues';
  issue: Issue;
  labelValues = Object.keys(IssueLabel).filter(key => isNaN(Number(key)));

  constructor(private issueService: IssueService, private dialog: MatDialog) {
    this.issue = {
      id: undefined,
      title: undefined,
      body: undefined,
      labels: IssueLabel.BUG,
      state: IssueState.OPEN,
      assignee: '',
      created_at: undefined,
      milestone: ''
    };
  }

  ngOnInit(): void {
  }

  create(): void {
    this.issueService.create(this.issue)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.issue.title) || this.check(this.issue.body) || this.check(this.issue.labels);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
