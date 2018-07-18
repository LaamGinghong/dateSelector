import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-day-box',
  templateUrl: './day-box.component.html',
  styleUrls: ['./day-box.component.css']
})
export class DayBoxComponent implements OnInit {
  @Input() set time(val) {
    if (val) {
      this.monthBox = [];
      const {year, month, date, day} = val;
      this.year = year;
      this.month = month;
      this.date = date;
      this.day = day;
      // console.log(this.year, this.month, this.date, this.day);
      this.initMaxMonthDate(this.year, this.month - 1);
      this.initMinMonthDay(this.year, this.month - 1);
    }
  }

  year: number;
  month: number;
  date: number;
  day: number;
  maxMonthDate: number;
  monthBox = [];
  lastMonthMax: number;
  currentDay: number;

  constructor() {
  }

  ngOnInit() {
  }

  initMaxMonthDate(year, month) {
    this.maxMonthDate = new Date(year, month, 0).getDate();
    for (let i = 1; i <= this.maxMonthDate; i++) {
      this.monthBox.push(i);
    }
  }

  initMinMonthDay(year, month) {
    this.lastMonthMax = new Date(year, month - 1, 0).getDate();
    this.currentDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < this.currentDay; i++) {
      this.monthBox.unshift(this.lastMonthMax);
      this.lastMonthMax--;
    }
  }
}
