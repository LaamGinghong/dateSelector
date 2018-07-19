import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-year-box',
  templateUrl: './year-box.component.html',
  styleUrls: ['./year-box.component.css']
})
export class YearBoxComponent implements OnInit {
  minYear: number; // yearBox开头
  maxYear: number; // yearBox结尾
  currentYear: number; // 当前年份
  yearBox = [];

  @Input() set year(val) {
    if (val) {
      this.currentYear = val;
      const digits = this.currentYear % 10; // 个位
      this.minYear = this.currentYear - digits;
      const gap = 9 - digits;
      this.maxYear = this.currentYear + gap;
      this.initYearBox(this.maxYear, this.minYear);
    }
  }

  @Output() toggleYearBox = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  initYearBox(max, min) { // 初始化yearBox
    for (let i = min; i <= max; i++) {
      this.yearBox.push({year: i, isThisTimes: true});
    }
    this.yearBox.unshift({year: min - 1, isThisTimes: false, isLastTimes: true});
    this.yearBox.push({year: max + 1, isThisTimes: false, isNextTimes: true});
  }

  changeYear(year) { // 点击切换年份
    if (year.isThisTimes) {
      this.toggleYearBox.emit(year.year);
    } else {
      if (year.isLastTimes) {
        this.minusYear();
      }
      if (year.isNextTimes) {
        this.addYear();
      }
    }
  }

  addYear() { // 往后十年
    this.maxYear += 10;
    this.minYear += 10;
    this.yearBox = [];
    this.initYearBox(this.maxYear, this.minYear);
  }

  minusYear() { // 往前十年
    this.maxYear -= 10;
    this.minYear -= 10;
    this.yearBox = [];
    this.initYearBox(this.maxYear, this.minYear);
  }
}
