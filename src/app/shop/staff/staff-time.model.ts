export class StaffTime {
  mobile: string;
  startDate: Date;
  endDate: Date;
  typeOfSearch: string;

  isComplete(): boolean {
    return this.startDate != null &&
      this.endDate != null &&
      this.mobile != null && this.mobile !== '' &&
      this.typeOfSearch != null && this.typeOfSearch !== '';
  }
}
