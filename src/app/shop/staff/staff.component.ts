import { Component, OnInit } from '@angular/core';
import {StaffTimeSearch} from './model/staff-time-search.model';
import {StaffTimeService} from './staff-time.service';
import {response} from 'express';
import {formatDate} from '@angular/common';
import {StaffTime} from './model/staff-time.model';
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

  constructor(private staffTimeService: StaffTimeService) { }

  ngOnInit(): void {
    this.staffTime = new StaffTimeSearch();
  }

  search(): void {
    this.staffTime.startDate = this.startDate.toLocaleDateString();
    this.staffTime.endDate = this.endDate.toLocaleDateString();
    this.data = this.staffTimeService.find(this.staffTime);
  }

  resetSearch(): void {
    this.staffTime = new StaffTimeSearch();
  }

}
