import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class BroadcastService {
  subjectDate$ = new Subject();

  constructor() {
  }

  broadcastDate(content) {
    this.subjectDate$.next(content);
  }

}
