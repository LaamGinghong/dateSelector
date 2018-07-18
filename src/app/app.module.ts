import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthBoxComponent } from './month-box/month-box.component';
import { YearBoxComponent } from './year-box/year-box.component';
import { DayBoxComponent } from './day-box/day-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthBoxComponent,
    YearBoxComponent,
    DayBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
