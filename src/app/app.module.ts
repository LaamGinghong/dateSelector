import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthBoxComponent } from './month-box/month-box.component';
import { YearBoxComponent } from './year-box/year-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthBoxComponent,
    YearBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
