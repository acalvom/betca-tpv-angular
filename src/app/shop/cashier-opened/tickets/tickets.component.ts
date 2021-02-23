import {Component} from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent{

  title = 'Tickets Management';
  key: string;
  tickets = of([]);

  constructor() {
  }

  search(): void {

  }

  resetSearch(): void {
    this.key = '';
    this.tickets = null;
  }

  update($event: any): void {

  }
}
