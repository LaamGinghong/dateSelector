import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DateBoxModule} from './date-box/date-box.module';
import {InputBoxModule} from './input-box/input-box.module';
import {BroadcastService} from './broadcast.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateBoxModule,
    InputBoxModule
  ],
  providers: [BroadcastService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
