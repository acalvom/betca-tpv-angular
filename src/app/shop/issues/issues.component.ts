import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {Issue} from './issue.model';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  title = 'Issues';
  issues = of([]);

  constructor() { }

  ngOnInit(): void {
  }

  create(): void {
    // TODO show creation dialog
  }

  read(issue: Issue): void {
    // TODO show details dialog
  }

}
