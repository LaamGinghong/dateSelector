import {Component, OnInit} from '@angular/core';
import {BroadcastService} from './broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateBoxStatus = false;
  year: number;
  month: number;
  date: number;

  constructor(private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.broadcastService.subjectDate$.subscribe(data => {
      if (data) {
        this.dateBoxStatus = data['status'];
        this.year = data['year'];
        this.month = data['month'];
        this.date = data['date'];
      }
    });
  }

  toggleDateBox(e) {
    if (e) {
      this.dateBoxStatus = !this.dateBoxStatus;
    }
  }
}
