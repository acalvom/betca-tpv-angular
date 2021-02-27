import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-score-bar',
  templateUrl: './score-bar.component.html'
})
export class ScoreBarComponent implements OnInit {
  @Input() score: number;
  @Output() scoreChange = new EventEmitter<number>();
  private ICON_WIDTH = 20;
  private NUMBER_ICONS = 5;
  iconNames: string[] = [];
  constructor() {
  }
  ngOnInit(): void {
    this.fillStars();
  }
  private fillStars(): void {
    for (let i = 0; i < this.NUMBER_ICONS; i++) {
      if (i + 0.5 < this.score) { this.iconNames[i] = 'star'; }
      if (i + 0.5 === this.score) { this.iconNames[i] = 'star_half'; }
      if (i + 0.5 > this.score) { this.iconNames[i] = 'star_border'; }
    }
  }
  iconClicked(myEvent: any): void {
    const iconId = myEvent.id;
    const event = myEvent.event;
    if (Math.sign(event.offsetX - this.ICON_WIDTH / 2) >= 0) {
      this.score = Number.parseInt(iconId, 10) + 1;
    } else {
      this.score = Number.parseInt(iconId, 10) + 0.5;
    }
    this.scoreChange.emit(this.score);
    this.fillStars();
  }
}
