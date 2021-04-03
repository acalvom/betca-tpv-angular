import { EndPoints } from '@shared/end-points';
import { HttpService } from './../../core/http.service';
import { Status } from './status.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlackPublisherService {

  constructor(private httpService: HttpService) { 
  }
  
  public sendMessageToSlack(body: { title: string; text: string; status: Status; }) {
    const bodyMessage = this._getBodyMessage(body);
    return this.httpService.post(EndPoints.SLACK, bodyMessage);
  }

  private _getColorByStatus(status:Status):string {
    switch(status) {
      case Status.info:
        return '#2ECC71';
      case Status.warning:
        return '#F1C40F';
      case Status.critical:
        return '#E74C3C';
      default: 
        return '#2ECC71';
    }
  }

  private _getBodyMessage(body) {
    return {
      title: body.title,
      text:body.text,
      status: this._getColorByStatus(body.status)
    }
  }
}
