export class StaffReport {
  constructor(user: string, hours: number) {
    this.user = user;
    this.hours = hours;
  }
  user: string;
  hours: number;
}
