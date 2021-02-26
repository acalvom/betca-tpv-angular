import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  @Input() id: number;
  @Input() iconName: string;
  @Output() clickEvt = new EventEmitter<any>();

  onClick(event: MouseEvent): void {
    const myEvent = { id: this.id, event };
    this.clickEvt.emit(myEvent);
  }
}
