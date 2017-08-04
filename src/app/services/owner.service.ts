import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Owner } from '../models/owner.model';
import { Address } from '../models/address.model';

const BASE_URI = 'http://localhost:4000/api/owners/';

@Injectable()
export class OwnerService {

  constructor(private http: Http) {
  }

  getOwners(): Observable<Owner[]> {
    return this.http.get(BASE_URI)
      .map(res => res.json())
      .map(res => res.data)
      .map(this.parseOwners)
      .catch(this.onError);
  }

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
          owner.adres.straat,
          owner.adres.nummer,
          owner.adres.postcode,
          owner.adres.gemeente
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
