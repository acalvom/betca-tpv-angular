import { HttpService } from './../../core/http.service';
import { Status } from './status.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlackPublisherService {

  private SLACK_ENDPOINT:string;

  constructor(private httpService: HttpService) { 
    this.SLACK_ENDPOINT = ''
  }
  
  public sendMessageToSlack(body: { title: string; text: string; status: Status; }) {
    const bodyMessage = this._getBodyMessage(body);
    return this.httpService.post(this.SLACK_ENDPOINT, bodyMessage);
  }

  private _getIconByStatus(status:Status) {
    switch(status) {
      case Status.info:
        return ':large_green_circle:';
      case Status.warning:
        return ':large_yellow_circle:';
      case Status.critical:
        return ':red_circle:';
      default: 
        return ':large_green_circle:';
    }
  }

  private _getBodyMessage(body) {
    return {
      blocks: [
        {
          type: "divider"
        },
        {
          type: "header",
          text: {
            type: "plain_text",
            text: body.title,
            emoji: true
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `${this._getIconByStatus(body.status)} \n ${body.text} \n ${this._getIconByStatus(body.status)}}`
          },
          accesory: {
            type: "image",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/UPM_Logo_Blog.png",
            alt_text: "Logo upm"
          }
        }
      ]
    }
  }
}
