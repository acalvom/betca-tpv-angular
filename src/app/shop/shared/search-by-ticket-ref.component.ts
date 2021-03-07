import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SharedArticleService} from './services/shared.article.service';
import {Observable, of} from 'rxjs';
import {SharedTicketService} from './services/shared.ticket.service';

@Component({
  selector: 'app-search-by-ticket-ref',
  templateUrl: './search-by-ticket-ref.component.html'
})
export class SearchByTicketRefComponent{
  tickets: Observable<string[]> = of([]);

  @Input() ticketRef: string;
  @Output() add = new EventEmitter<string>();

  constructor(private sharedTicketService: SharedTicketService) {
  }

  public onSelect(value): void {
    this.add.emit(value);
  }

  searchWithoutInvoice(): void {
    this.tickets = this.sharedTicketService.searchTicketsWithoutInvoice();
  }

}
