import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cat } from '../models/cat.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

const BASE_URI = 'http://localhost:4000/api/cats/';

@Injectable()
export class CatService {

  constructor(private http: Http) {
  }

  getCats(): Observable<Cat[]> {
    return this.http.get(BASE_URI)
      .map(res => res.json())
      .map(res => res.data)
      .map(this.parseCats)
      .catch(this.onError);
  };

  deleteCat(catId: string) {
    return this.http.delete(BASE_URI + catId)
      .map(res => res.json())
      .map(res => res.data)
      .catch(this.onError);
  };

  /*getCat(catId: string): Observable<Cat[]> {
    return this.http.get(`${BASE_URI}${catId}`)
      .map(res => res.data.data)
      ;
  };

  registerCat(cat: Cat, foto: any) {
    return Upload.upload({
      url: BASE_URI,
      method: 'POST',
      data: cat, file: foto
    });
  };

  updateCat(catId: string, changes: any) {
    return Upload.upload({
      url: BASE_URI + catId,
      method: 'PUT',
      data: changes, file: changes.foto
    });
  };

  deleteCat(catId: string) {
    return $http.delete(BASE_URI + cat._id);
  };*/

  parseCats(data: any[]): Cat[] {
    return data.map(cat => {
      return new Cat(
        cat.naam,
        new Date(cat.geboortedatum),
        cat.geslacht,
        cat._id,
        cat.gecastreerd,
        cat.medicatie,
        cat.dierenarts,
        cat.eigenaar,
        cat.voeding,
        cat.gedrag,
        cat.foto
      );
    });
  }

  onError(res: Response): Observable<any> {
    let error = `Error ${res.status}: ${res.statusText}`;
    console.error(error);
    return Observable.throw(error);
  }

}
