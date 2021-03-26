import {Component, OnInit} from '@angular/core';
import {IssueService} from '../issue.service';
import {MatDialog} from '@angular/material/dialog';
import {IssueLabel} from '../issue-label.enum';
import {IssueCreation} from '../issue-creation.model';

@Component({
  selector: 'app-issue-creation-dialog',
  templateUrl: './issue-creation-dialog.component.html',
  styleUrls: ['./issue-creation-dialog.component.css']
})
export class IssueCreationDialogComponent implements OnInit {
  title = 'Issues';
  issueCreation: IssueCreation;
  issueTitle: string;
  issueBody: string;
  issueLabel: IssueLabel;
  labelValues = Object.keys(IssueLabel).filter(key => isNaN(Number(key)));

  constructor(private issueService: IssueService, private dialog: MatDialog) {
    this.issueTitle = '';
    this.issueBody = '';
    this.issueLabel = undefined;
  }

  ngOnInit(): void {
  }

  create(): void {
    this.issueCreation = {
      title: this.issueTitle,
      body: this.issueBody,
      labels: [this.issueLabel]
    };
    this.issueService.create(this.issueCreation)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.issueTitle) || this.check(this.issueBody) || this.check(this.issueLabel);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
