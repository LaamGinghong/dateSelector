import {Component, OnInit} from '@angular/core';
import {BroadcastService} from '../broadcast.service';

@Component({
  selector: 'app-date-box',
  templateUrl: './date-box.component.html',
  styleUrls: ['./date-box.component.css']
})
export class DateBoxComponent implements OnInit {
  dayTime: Date; // 今天
  year: number;
  month: number;
  date: number;
  day: number;
  dateTime = {  // 传入day-box
    year: this.year,
    month: this.month,
    date: this.date,
  };
  monthBox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  weekBox = ['日', '一', '二', '三', '四', '五', '六'];
  yearBoxStatus = false;
  monthBoxStatus = false;

  constructor(private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.broadcastService.subjectDate$.subscribe(data => {
      this.year = data['year'];
      this.month = data['month'];
      this.date = data['date'];
    });
    this.dayTime = new Date();
    this.year = this.dayTime.getFullYear();
    this.month = this.dayTime.getMonth();
    this.date = this.dayTime.getDate();
    this.day = this.dayTime.getDay();
    this.initDateTime();
  }

  toggleYearBox(e?) { // 通过year-box设置年份
    this.yearBoxStatus = !this.yearBoxStatus;
    if (e) {
      this.year = e;
      this.initDateTime();
    }
  }

  toggleMonthBox(e?) { // 通过month-box设置月份
    this.monthBoxStatus = !this.monthBoxStatus;
    if (e) {
      this.month = e - 1;
      this.initDateTime();
    }
  }

  changeMonth(e) { // 点击day-box上下月份设置年月
    if (e <= 12 && e) {
      this.month = e - 1;
    }
    if (e > 12) {
      this.month = 0;
      this.year++;
    }
    if (e <= 0) {
      this.month = 11;
      this.year--;
    }
    this.initDateTime();
  }

  lastYear() { // 上一年
    this.year--;
    this.initDateTime();
  }

  nextYear() { // 下一年
    this.year++;
    this.initDateTime();
  }

  lastMonth() { // 上一月
    if (this.month) {
      this.month--;
    } else {
      this.month = 11;
      this.year--;
    }
    this.initDateTime();
  }

  nextMonth() { // 下一月
    if (this.month < 11) {
      this.month++;
    } else {
      this.month = 0;
      this.year++;
    }
    this.initDateTime();
  }

  initDateTime() { // 初始化传入day-box的值
    this.dateTime = {
      year: this.year,
      month: this.month,
      date: this.date,
    };
  }
}
