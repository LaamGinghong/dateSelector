import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputBoxComponent} from './input-box.component';
import {BroadcastService} from '../broadcast.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InputBoxComponent],
  exports: [InputBoxComponent],
  providers: [BroadcastService]
})
export class InputBoxModule {
}
