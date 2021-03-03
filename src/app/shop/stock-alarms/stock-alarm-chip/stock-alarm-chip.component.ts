import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StockAlarmLine} from '../../shared/services/models/stock-alarm-line.model';

@Component({
  selector: 'app-stock-alarm-chip',
  templateUrl: './stock-alarm-chip.component.html',
  styleUrls: ['./stock-alarm-chip.component.css']
})
export class StockAlarmChipComponent implements OnInit {

  @Input() data: StockAlarmLine;
  @Output() update = new EventEmitter<StockAlarmLine>();
  @Output() delete = new EventEmitter<StockAlarmLine>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public changeWarning(): void {
    this.update.emit(this.data);
  }

  public changeCritical(): void {
    this.update.emit(this.data);
  }

  public click(): void {
    this.delete.emit(this.data);
  }

}
