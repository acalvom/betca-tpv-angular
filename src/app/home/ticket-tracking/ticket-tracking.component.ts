import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketTrackingService } from './ticket-tracking.service';
import { Shopping } from '../../shop/shared/services/models/shopping.model';

@Component({
  selector: 'app-ticket-tracking',
  templateUrl: './ticket-tracking.component.html',
  styleUrls: ['./ticket-tracking.component.css']
})
export class TicketTrackingComponent implements OnInit {

  id: string;
  products: Shopping[];

  constructor(
    private route: ActivatedRoute,
    private ticketTrackingService: TicketTrackingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id );
    this.ticketTrackingService.read().subscribe( products => this.products = products );
  }

}
