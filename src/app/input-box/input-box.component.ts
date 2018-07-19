import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BroadcastService} from '../broadcast.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  inputValue = '';
  @Output() dateBoxStatus = new EventEmitter<boolean>();
  @Output() clearInputBox = new EventEmitter<boolean>();

  constructor(private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.broadcastService.subjectDate$.subscribe(data => {
      if (data) {
        this.inputValue = `${data['year']}年${data['month']}月${data['date']}日`;
      }
    });
  }

  showDateBox() {
    this.dateBoxStatus.emit(true);
  }

  clearInput() {
    this.inputValue = '';
    this.clearInputBox.emit(true);
  }
}
