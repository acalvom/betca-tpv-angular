import {Component, OnInit} from '@angular/core';
import {StaffTimeSearch} from './model/staff-time-search.model';
import {StaffTimeService} from './staff-time.service';
import {DatePipe} from '@angular/common';
import {of} from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffTime: StaffTimeSearch;
  startDate: Date;
  endDate: Date;
  data = of([]);

  constructor(private staffTimeService: StaffTimeService,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.staffTime = new StaffTimeSearch();
  }

  search(): void {
    this.staffTime.startDate = this.datePipe.transform(this.startDate, 'yyyy-MM-dd');
    this.staffTime.endDate = this.datePipe.transform(this.endDate, 'yyyy-MM-dd');
    this.data = this.staffTimeService.find(this.staffTime);
  }

  resetSearch(): void {
    this.staffTime = new StaffTimeSearch();
  }

}
