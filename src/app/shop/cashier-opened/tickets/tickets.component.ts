import {Component} from '@angular/core';
import {of} from 'rxjs';
import {TicketService} from './ticket.service';
import {Ticket} from '../../shared/services/models/ticket.model';
import {MatDialog} from '@angular/material/dialog';
import {TicketEditingDialogComponent} from './ticket-editing-dialog.component';
import {TicketSearch} from './ticket-search.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent{

  title = 'Tickets Management';
  ticketSearch: TicketSearch;
  tickets = of([]);

  constructor(private dialog: MatDialog, private ticketService: TicketService) {
    this.resetSearch();
  }

  search(): void {
    this.tickets = this.ticketService.search(this.ticketSearch);
  }

  resetSearch(): void {
    this.ticketSearch = {};
  }

  update(ticket: Ticket): void {
    this.ticketService.read(ticket.id)
      .subscribe( ticketEdition => this.dialog.open(TicketEditingDialogComponent, {data: ticketEdition,
        width: '80%',
    }));
  }
}
