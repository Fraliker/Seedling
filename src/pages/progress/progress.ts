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
  public level : number = 0;
  public completed : number;

  constructor(public navCtrl: NavController, public dataServe: DataStore, public params: NavParams) {
    this.checkCompleted();
  }

  ionViewWillEnter() {
    this.checkCompleted();

  }

  ionViewDidLoad() {
  }

  checkCompleted() {
    let complete;
    this.dataServe.getCompleted().then((totalComplete) => {
      if(totalComplete) {
        console.log('entered2');
        this.completed = JSON.parse(totalComplete);
        this.loadProgress = Math.floor((this.completed % 3) / 3 * 100) + 1;
    this.level = Math.ceil((this.completed / 3 + 0.01));
        console.log('complete', this.completed);
      }
    }).catch(error => {
        console.log(error);
      })
    console.log('completed', this.completed);
    this.loadProgress = Math.floor((this.completed % 3) / 3 * 100) + 1;
    this.level = 0;
    while(Math.pow(this.level, 2) < this.completed) {
      ++this.level;
    }
    this.level = Math.ceil((this.completed / 3 + 0.01));
  }

  currentLevel() {
    let picture = ["assets/images/buddy1.png", "assets/images/buddy2.png", "assets/images/buddy3.png", "assets/images/buddy4.png", "assets/images/buddy5.png"];
    if(this.level < 5) return picture[this.level - 1];
    return picture[4];
  }

}
