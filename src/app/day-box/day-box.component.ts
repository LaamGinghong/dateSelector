import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
      this.initMaxMonthDate(this.year, this.month);
      this.initMinMonthDay(this.year, this.month);
    }
  }

  @Output() changeMonth = new EventEmitter<number>();

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
    this.maxMonthDate = new Date(year, month + 1, 0).getDate();
    const today = new Date().toDateString();
    let day = {
      date: 0,
      month: month + 1,
      isToday: false,
      isThisMonth: false
    };
    let selectDay = '';
    for (let i = 1; i <= this.maxMonthDate; i++) {
      selectDay = new Date(year, month, i).toDateString();
      if (today === selectDay) {
        day = {
          date: i,
          isToday: true,
          isThisMonth: true,
          month: month + 1
        };
      } else {
        day = {
          date: i,
          isToday: false,
          isThisMonth: true,
          month: month + 1
        };
      }
      this.monthBox.push(day);
    }
    const maxMonthDay = new Date(year, month, this.maxMonthDate).getDay();
    for (let i = 1; i <= 6 - maxMonthDay; i++) {
      this.monthBox.push({date: i, isToday: false, isThisMonth: false, month: month + 2});
    }
  }

  initMinMonthDay(year, month) {
    this.lastMonthMax = new Date(year, month, 0).getDate();
    this.currentDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < this.currentDay; i++) {
      this.monthBox.unshift({date: this.lastMonthMax, isToday: false, isThisMonth: false, month: month});
      this.lastMonthMax--;
    }
  }

  selectDate(date: { date: number, isToday: boolean, isThisMonth: boolean, month: number }, box: Array<{ date: number, isToday: boolean, isThisMonth: boolean, month: number }>) {
    if (date.isThisMonth) {
      box.forEach(item => {
        item.isToday = item.date === date.date ? true : false;
      });
    } else {
      this.changeMonth.emit(date.month);
    }
  }
}
