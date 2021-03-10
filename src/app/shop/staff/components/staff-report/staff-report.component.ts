import { Component, OnInit } from '@angular/core';
import {StaffReportService} from './staff-report.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-staff-report',
  templateUrl: './staff-report.component.html',
  styleUrls: ['./staff-report.component.css']
})
export class StaffReportComponent implements OnInit {

  month: string;
  data = of([]);

  constructor(private staffReportService: StaffReportService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.data = this.staffReportService.find(this.month);
  }
}
