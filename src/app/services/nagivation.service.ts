import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Tab } from '../models/tab.model';

@Injectable()
export class NagivationService {
  tabs: Tab[];

  constructor() {
  }

  getTabs(): Observable<Tab[]> {
    if (!this.tabs) {
      this.tabs = [
        new Tab('Cats', 'cats'),
        new Tab('Owners', 'owners'),
        new Tab('Reservations', 'reservations ')
      ];
    }

    return Observable.create(observer => {
      observer.next(this.tabs);
      observer.complete();
    });
  };

}
