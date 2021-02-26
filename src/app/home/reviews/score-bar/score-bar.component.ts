import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-score-bar',
  templateUrl: './score-bar.component.html',
  styleUrls: ['./score-bar.component.css']
})
export class ScoreBarComponent {
  @Input() score;
  private ICON_WIDTH = 20;
  iconNames: string[] = [];
  constructor() {
    for (let i = 0; i < 5; i++) {
      this.iconNames[i] = 'star_border';
    }
  }
  iconClicked(myEvent: any): void {
    const iconId = myEvent.id;
    const event = myEvent.event;
    for (let i = 0; i < 5; i++) {
      if (i < iconId) { this.iconNames[i] = 'star'; }
      if (i > iconId) { this.iconNames[i] = 'star_border'; }
    }
    if (Math.sign(event.offsetX - this.ICON_WIDTH / 2) >= 0) {
      this.iconNames[iconId] = 'star';
      this.score = iconId + 1;
    } else {
      this.iconNames[iconId] = 'star_half';
      this.score = iconId + 0.5;
    }
  }
}
