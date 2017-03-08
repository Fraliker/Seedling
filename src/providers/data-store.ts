import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

/*
  Generated class for the DataStore provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataStore {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello DataStore Provider');
  }

  getData() {
  	return this.storage.get('list');
  }

  save(data) {
  	let newData = JSON.stringify(data);
  	this.storage.set('list', newData);
  }

}
