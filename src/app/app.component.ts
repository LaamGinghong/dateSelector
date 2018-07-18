import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dayTime: Date;
  year: number;
  month: number;
  date: number;
  day: number;
  dateTime = {
    year: this.year,
    month: this.month,
    date: this.date,
    day: this.day
  };
  monthBox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  weekBox = ['日', '一', '二', '三', '四', '五', '六'];
  yearBoxStatus = false;
  monthBoxStatus = false;

  ngOnInit() {
    this.dayTime = new Date();
    this.year = this.dayTime.getFullYear();
    this.month = this.dayTime.getMonth() + 1;
    this.date = this.dayTime.getDate();
    this.day = this.dayTime.getDay();
    this.dateTime = {
      year: this.year,
      month: this.month,
      date: this.date,
      day: this.day
    };
  }

  openYearBox() {
    this.toggleYearBox();
  }

  toggleYearBox(e?) {
    this.yearBoxStatus = !this.yearBoxStatus;
    if (e) {
      this.year = e;
    }
  }

  toggleMonthBox(e?) {
    this.monthBoxStatus = !this.monthBoxStatus;
    if (e) {
      this.month = e;
      this.dateTime = {
        year: this.year,
        month: this.month,
        date: this.date,
        day: this.day
      };
    }
  }
}
