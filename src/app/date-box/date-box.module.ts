import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateBoxComponent} from './date-box.component';
import {DayBoxComponent} from './day-box/day-box.component';
import {YearBoxComponent} from './year-box/year-box.component';
import {MonthBoxComponent} from './month-box/month-box.component';
import {BroadcastService} from '../broadcast.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DateBoxComponent, DayBoxComponent, YearBoxComponent, MonthBoxComponent],
  exports: [DateBoxComponent, DayBoxComponent, YearBoxComponent, MonthBoxComponent],
  providers: [BroadcastService]
})
export class DateBoxModule {
}
