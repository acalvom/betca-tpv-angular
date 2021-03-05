import { Status } from './message-status.enum';
import { SlackPublisherService } from './slack-publisher.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slack-publisher',
  templateUrl: './slack-publisher.component.html',
  styleUrls: ['./slack-publisher.component.css']
})
export class SlackPublisherComponent implements OnInit {
  slackForm: FormGroup;

  constructor(private slackPublisherService :SlackPublisherService) {
    this.slackForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      text: new FormControl('', [
        Validators.required,
      ]),
      status: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const body = {
      title: this.slackForm.get('title').value,
      text: this.slackForm.get('text').value,
      status: this._getStatusEnumByText(this.slackForm.get('status').value),
    }
    
    this.slackPublisherService.sendMessageToSlack(body);
  }

  private _getStatusEnumByText(status: string) {
    switch(status) {
      case 'info':
        return Status.info;
      case 'warning':
        return Status.warning;
      case 'critical':
        return Status.critical;
      default: 
        return Status.info; 
    }
  }
}
