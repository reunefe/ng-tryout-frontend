import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Owner } from '../models/owner.model';
import { Address } from '../models/address.model';

const BASE_URI = 'http://localhost:4000/api/owners/';

@Injectable()
export class OwnerService {
  owners: BehaviorSubject<Owner[]> = new BehaviorSubject([]);

  constructor(private http: Http) {
  }

  getEndpoint(): string {
    return BASE_URI;
  }

  getOwners() {
    this.http.get(BASE_URI)
      .map(res => res.json())
      .map(res => res.data)
      .map(this.parseOwners)
      .subscribe(data => {
        this.owners.next(data);
      }, response => {
        this.owners.error(`Error ${response.status}: ${response.statusText}`);
      });
  }

  createOwner(owner: any): Observable<Owner> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(BASE_URI, owner, options).map(res => res.json())
      .map(res => res.data)
      .catch(this.onError);
  };

  deleteOwner(ownerId: string): Observable<Owner> {
    return this.http.delete(BASE_URI + ownerId)
      .map(res => res.json())
      .map(res => res.data)
      .catch(this.onError);
  };

  parseOwners(data: any[]): Owner[] {
    return data.map(owner => {
      return new Owner(
        owner.voornaam,
        owner.familienaam,
        owner.telefoonnummer,
        owner._id,
        new Address(
          owner.adres && owner.adres.straat,
          owner.adres && owner.adres.nummer,
          owner.adres && owner.adres.postcode,
          owner.adres && owner.adres.gemeente
        ),
        owner.email,
        owner.noodnummer,
        owner.foto
      );
    });
  }

  onError(res: Response): Observable<any> {
    let error = `Error ${res.status}: ${res.statusText}`;
    console.error(error);
    return Observable.throw(error);
  }

}
