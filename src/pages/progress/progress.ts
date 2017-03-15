import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataStore } from '../../providers/data-store';

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

  constructor(public navCtrl: NavController, public dataServe: DataStore) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressPage');
    let completed : number = this.checkCompleted();
    console.log(completed);
    this.loadProgress = Math.ceil((completed % 3) / 3 * 100);
    this.level = Math.ceil((completed / 3 + 0.01));
  }

  checkCompleted() {
    return this.dataServe.getCompleted();
  }

}
