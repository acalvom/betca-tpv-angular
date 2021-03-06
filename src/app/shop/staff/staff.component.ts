import { Component, OnInit } from '@angular/core';
import {StaffTime} from './staff-time.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffTime: StaffTime;
  constructor() { }

  ngOnInit(): void {
    this.staffTime = new StaffTime();
  }

  search(): void {
    console.log(this.staffTime);
  }

  resetSearch(): void {
    this.staffTime = new StaffTime();
    console.log(this.staffTime);
  }

}
