import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NavController } from 'ionic-angular';
import { DataStore } from '../../providers/data-store';
import { ItemViewPage } from '../item-view/item-view';
import { ToastController } from 'ionic-angular';


import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public bundle;

  constructor(public navCtrl: NavController, public dataServe: DataStore, public toastCtrl: ToastController, public localNotifs : LocalNotifications) {
  	this.dataServe.getData().then((list) => {
  		if(list) {
  			this.bundle = JSON.parse(list);
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
  	this.bundle.push(item);
  	this.dataServe.save(this.bundle);
  }

  complete(item) {
    this.bundle.splice(this.bundle.indexOf(item), 1);
    this.dataServe.save(this.bundle);
    let toast = this.toastCtrl.create({
        message: 'Congratulations for completing a task!',
        duration: 750,
        position: 'top'
      });
    toast.present();

    this.dataServe.completeOne();

    this.localNotifs.schedule({
      id: 1,
      text: 'Single ILocalNotification',
    });

  }

  refresh() {
    this.dataServe.getBasic().then((list) => {
      if(list) {
        this.bundle = JSON.parse(list);
        this.dataServe.save(this.bundle);
      }
    });
  }

}
