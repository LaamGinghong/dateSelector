import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-month-box',
  templateUrl: './month-box.component.html',
  styleUrls: ['./month-box.component.css']
})
export class MonthBoxComponent implements OnInit {
  @Input() monthBox: Array<number>;
  @Output() toggleMonthBox = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  changeMonth(item) { // 点击切换月份
    this.toggleMonthBox.emit(item);
  }
}
