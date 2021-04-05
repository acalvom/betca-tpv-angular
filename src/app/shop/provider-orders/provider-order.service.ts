import {Injectable} from '@angular/core';
import {Order} from '../shared/services/models/order.model';
import {OrderLine} from '../shared/services/models/orderLine.model';
import {Observable, of} from 'rxjs';
import {OrderSearch} from "./order-search.model";
import {TicketTrackingService} from "../../home/ticket-tracking/ticket-tracking.service";
import {formatDate} from "@angular/common";
import {OfferSearch} from "../offers/offer-search.model";
import {Offer} from "../shared/services/models/offer.model";
import {EndPoints} from "@shared/end-points";
import {HttpService} from "@core/http.service";
import * as moment from "moment";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProviderOrderService {

  private static SEARCH = '/search';

  constructor(private httpService: HttpService, private ticketTrackingService: TicketTrackingService) {

  }


  close(reference: string, order: Order): Observable<Order> {

    order.closingDate = new Date(this.getDateFormatToString());
    /*
    Update state a IN_STOCK to products
    ticketTrackingService.update();
    * */
    return this.httpService
      .successful()
      .put(EndPoints.ORDERS + '/' + reference, order);
  }

  getDateFormatToString(): string {
    const format = 'YYYY-MM-DD[T]HH:mm:ss';
    const myDate = new Date();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    return formattedDate;
  }


  search(orderSearch: OrderSearch): Observable<Order[]> {
    return this.httpService.param("description", (orderSearch.description != undefined) ? orderSearch.description : ".*")
      .param("fromDate", this.convertDateFormat(orderSearch.fromDate))
      .param("toDate", this.convertDateFormat(orderSearch.toDate))
      .get(EndPoints.ORDERS + ProviderOrderService.SEARCH);
  }

  create(order: Order): Observable<Order> {

    /*
    Update state a REQUIRE_PROVIDER to products
    ticketTrackingService.update();
    * */
    return this.httpService
      .post(EndPoints.ORDERS, order);
  }

  readAll(): Observable<Order[]> {
    return this.httpService
      .get(EndPoints.ORDERS);
  }

  read(reference: string): Observable<Order> {
    return this.httpService
      .get(EndPoints.ORDERS + '/' + reference);
  }

  update(reference: string, order: Order): Observable<Order> {
    return this.httpService
      .successful()
      .put(EndPoints.ORDERS + '/' + reference, order);
  }


  delete(reference: string): Observable<void> {
    return this.httpService
      .successful()
      .delete(EndPoints.ORDERS + '/' + reference);
  }

  convertDateFormat(datePicker: Date): string {
    return datePicker.toISOString().replace(/\.[0-9A-Z]{4}/, '');
  }


}
