import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {Issue} from './issue.model';
import {MatDialog} from '@angular/material/dialog';
import {IssueCreationDialogComponent} from './issue-creation-dialog/issue-creation-dialog.component';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  title = 'Issues';
  issues = of([]);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  create(): void {
    this.dialog.open(IssueCreationDialogComponent);
  }

  read(issue: Issue): void {
    // TODO show details dialog
  }

}
