import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BroadcastService} from '../../broadcast.service';

@Component({
  selector: 'app-day-box',
  templateUrl: './day-box.component.html',
  styleUrls: ['./day-box.component.css']
})
export class DayBoxComponent implements OnInit, OnDestroy {
  year: number;
  month: number;
  date: number;
  maxMonthDate: number; // 当前月份最后一天日期
  monthBox = [];
  lastMonthMax: number; // 上一个月最后一天日期
  currentDay: number; // 这个月第一天星期

  @Input() set time(val) {
    if (val) {
      this.monthBox = [];
      const {year, month, date} = val;
      this.year = year;
      this.month = month;
      this.date = date;
      this.initMaxMonthDate(this.year, this.month);
      this.initMinMonthDay(this.year, this.month);
    }
  }

  @Output() changeMonth = new EventEmitter<number>();


  constructor(private broadcastService: BroadcastService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  initMaxMonthDate(year, month) { // 初始化月份
    this.maxMonthDate = new Date(year, month + 1, 0).getDate(); // 获取到当前月份最后一天日期
    const today = new Date().toDateString();
    let day = {
      date: 0,
      month: month + 1,
      isToday: false,
      isThisMonth: false
    };
    let selectDay = '';
    for (let i = 1; i <= this.maxMonthDate; i++) { // 初始化当前月份
      selectDay = new Date(year, month, i).toDateString();
      if (today === selectDay) { // 判断选中的是否是今天
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
    const maxMonthDay = new Date(year, month, this.maxMonthDate).getDay(); // 判断当前最后一天是星期几
    for (let i = 1; i <= 6 - maxMonthDay; i++) { // 补充下一个月的前几天
      this.monthBox.push({date: i, isToday: false, isThisMonth: false, month: month + 2});
    }
    if (maxMonthDay === 6) { // 最后一天在周六则补齐下个月前七天
      for (let i = 1; i <= 7; i++) {
        this.monthBox.push({date: i, isToday: false, isThisMonth: false, month: month + 2});
      }
    }
  }

  initMinMonthDay(year, month) { // 初始化月份
    this.lastMonthMax = new Date(year, month, 0).getDate(); // 上个月最后一天日期
    this.currentDay = new Date(year, month, 1).getDay(); // 这个月第一天星期
    for (let i = 0; i < this.currentDay; i++) {
      this.monthBox.unshift({date: this.lastMonthMax, isToday: false, isThisMonth: false, month: month});
      this.lastMonthMax--;
    }
    if (this.currentDay === 0) { // 如果这个月第一天恰好在星期天则补齐上个月最后七天
      this.lastMonthMax = new Date(year, month, 0).getDate();
      for (let i = this.lastMonthMax; i > this.lastMonthMax - 7; i--) {
        this.monthBox.unshift({date: i, isToday: false, isThisMonth: false, month: month});
      }
    }
  }

  selectDate(date: { date: number, isToday: boolean, isThisMonth: boolean, month: number }, box: Array<{ date: number, isToday: boolean, isThisMonth: boolean, month: number }>) {
    if (date.isThisMonth) { // 选择日期
      this.broadcastService.broadcastDate({year: this.year, month: date.month, date: date.date, status: false});
      box.forEach(item => {
        item.isToday = item.date === date.date ? true : false;
      });
    } else {
      this.changeMonth.emit(date.month);
    }
  }
}
