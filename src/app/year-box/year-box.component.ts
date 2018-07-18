import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-year-box',
  templateUrl: './year-box.component.html',
  styleUrls: ['./year-box.component.css']
})
export class YearBoxComponent implements OnInit {
  minYear: number;
  maxYear: number;
  currentYear: number;
  yearBox = [];

  @Input() set year(val) {
    if (val) {
      this.currentYear = val;
      const digits = this.currentYear % 10;
      this.minYear = this.currentYear - digits;
      let gap = 0;
      gap = 9 - digits;
      this.maxYear = this.currentYear + gap;
      this.initYearBox(this.maxYear, this.minYear);
    }
  }

  @Output() toggleYearBox = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  initYearBox(max, min) {
    for (let i = min; i <= max; i++) {
      this.yearBox.push(i);
    }
  }

  changeYear(year) {
    this.toggleYearBox.emit(year);
  }

  addYear() {
    this.maxYear += 10;
    this.minYear += 10;
    this.yearBox = [];
    this.initYearBox(this.maxYear, this.minYear);
  }

  minusYear() {
    this.maxYear -= 10;
    this.minYear -= 10;
    this.yearBox = [];
    this.initYearBox(this.maxYear, this.minYear);
  }
}
