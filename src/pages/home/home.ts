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

    this.bundle = [{
        enabled: true,
        text: "Communicate with at least one known family member/ friend in person (not over phone or through text)"
      }, {
        enabled: true,
        text: "Talk to someone new today"
      },{
        enabled: true,
        text: "Journal Write - Write about some things that you accomplished today or that you are proud of"
      },{
        enabled: true,
        text: "Journal Write - Plan out your day for tomorrow - What things do you want to get done."
      },{
        enabled: true,
        text: "Finish at least one part of a long time project (personal or from work)"
      },{
        enabled: true,
        text: "Complete a relaxation hour - Take time away from work and do something you genuinely enjoy"
      },{
        enabled: true,
        text: "Read a new book about a topic you are interested in"
      },{
        enabled: true,
        text: "Practice discernment while watching TV or reading the news"
      },{
        enabled: true,
        text: "Take a long shower/bath"
      },{
        enabled: true,
        text: "Go jogging for at least 30 minutes"
      },];
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
      text: 'check your seedling for a task today!',
      at: new Date(new Date().getTime() + 60*60*12),
       led: 'FF0000',
       sound: null
    });

  }

  refresh() {
    //this.bundle = JSON.parse(this.dataServe.getBasic());
    //this.dataServe.save(this.bundle);
    
    this.dataServe.getBasic().then((list) => {
      console.log("returned");
      if(list) {
        this.bundle = JSON.parse(list);
        this.dataServe.save(this.bundle);
      }
    });
    
  }

}
