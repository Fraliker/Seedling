import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BundlesPage } from '../bundles/bundles';

import { DataStore } from '../../providers/data-store';

import { ItemViewPage } from '../item-view/item-view';

import { ToastController } from 'ionic-angular';

import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public basic;
	public student;

  constructor(public navCtrl: NavController, public dataServe: DataStore, public toastCtrl: ToastController) {
  	this.dataServe.getData().then((list) => {
  		if(list) {
  			this.basic = JSON.parse(list);
  		}
  	});
  }

  ionViewDidLoad() {
  

  }

  getTime() {
    let now = moment().format('LLLL');
    console.log(now);
  }
  
  viewItem(item) {
  	this.navCtrl.push(ItemViewPage, {
  		item: item
  	}); 	

  }

  saveItem(item) {
  	this.basic.push(item);
  	this.dataServe.save(this.basic);
  }

  complete(item) {
    this.basic.splice(this.basic.indexOf(item), 1);
    this.dataServe.save(this.basic);
    let toast = this.toastCtrl.create({
        message: 'Congratulations for completing a task!',
        duration: 2000
      });
    toast.present();
  }

  refresh() {
    this.dataServe.getBasic().then((basic) => {
      if(basic) {
        this.basic = JSON.parse(basic);
      }
    });
  }

}
