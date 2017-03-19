import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { DataStore } from '../../providers/data-store';

import {Observable} from "rxjs";

/*
  Generated class for the Progress page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html'
})
export class ProgressPage {

	public loadProgress : number;
  public level : number;

  constructor(public navCtrl: NavController, public dataServe: DataStore, public params: NavParams) {
    
  }

  ionViewWillEnter() {
    console.log("about to enter");
    console.log(this.params.data);
    let completed : number = this.checkCompleted();
    console.log("completed", completed);
    this.loadProgress = Math.floor((completed % 3) / 3 * 100) + 1;
    this.level = Math.ceil((completed / 3 + 0.01));

  }

  ionViewDidLoad() {
  }

  checkCompleted() {
    return this.dataServe.getCompleted();
  }

}
