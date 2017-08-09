import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Tab } from '../models/tab.model';
import { OwnerRegistrationComponent } from '../views/owners/owner-registration/owner-registration.component';

@Injectable()
export class NavigationService {
  tabs: Tab[];

  constructor() {
  }

  getTabs(): Observable<Tab[]> {
    if (!this.tabs) {
      this.tabs = [
        new Tab('Cats', 'cats'),
        new Tab('Owners', 'owners', OwnerRegistrationComponent),
        new Tab('Reservations', 'reservations')
      ];
    }

    return Observable.create(observer => {
      observer.next(this.tabs);
      observer.complete();
    });
  };

}
