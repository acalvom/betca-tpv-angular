import {Component} from '@angular/core';
import {of} from 'rxjs';
import {TicketService} from './ticket.service';
import {Ticket} from '../../shared/services/models/ticket.model';
import {MatDialog} from '@angular/material/dialog';
import {TicketEditingDialogComponent} from './ticket-editing-dialog.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent{

  title = 'Tickets Management';
  key: string;
  tickets = of([]);

  constructor(private dialog: MatDialog, private ticketService: TicketService) {
    this.resetSearch();
  }

  search(): void {
    this.tickets = this.ticketService.search(this.key);
  }

  resetSearch(): void {
    this.key = null;
  }

  update(ticket: Ticket): void {
    this.ticketService.read(ticket.id)
      .subscribe( shoppingList => this.dialog.open(TicketEditingDialogComponent, {data: shoppingList}));
  }
}
