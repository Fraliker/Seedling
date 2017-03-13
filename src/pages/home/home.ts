import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BundlesPage } from '../bundles/bundles';

import { DataStore } from '../../providers/data-store';

import { ItemViewPage } from '../item-view/item-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public basic;
	public student;

  constructor(public navCtrl: NavController, public dataServe: DataStore) {
  	this.dataServe.getData().then((list) => {
  		if(list) {
  			this.basic = JSON.parse(list);
  		}

  	});
  }

  ionViewDidLoad() {
  	  this.basic = [{
    enabled: true,
    text: "Communicate with at least one known family member/ friend in person (not over phone or through text)"
  }, {
    enabled: true,
    text: "Talk to someone new today"
  },{
    enabled: false,
    text: "Journal Write - Write about some things that you accomplished today or that you are proud of"
  },{
    enabled: false,
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

  this.student = [{
    enabled: true,
    text: "Communicate with at least one known family member/ friend in person (not over phone or through text)"
  }, {
    enabled: true,
    text: "Talk to someone new today"
  },{
    enabled: true,
    text: "Think about how today went - Write about some things that you accomplished today or that you are proud of"
  },{
    enabled: true,
    text: "Journal Write - Plan out the next week - What tests/ projects/ assignments do you have coming up? Set manageable goals for yourself to accomplish by this time next week."
  },{
    enabled: true,
    text: "Change up your studying tactics - Analyze what has been working for you and what has not. Try developing a new study method in order to maximize those beneftis"
  },{
    enabled: true,
    text: "Go over notes taken in class - "
  },{
    enabled: true,
    text: "Take at least an hour break while studying tonight"
  },{
    enabled: true,
    text: "Read ahead in a class you are struggling in"
  },{
    enabled: true,
    text: "Take a walk around the neighborhood"
  },{
    enabled: true,
    text: "Sleep an hour before you usually do"
  },];


  console.log(this.basic);	
  }

  addItem() {


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
    item.enabled = false;
    this.dataServe.save(this.basic);

  }

  delete(item) {
    this.basic.splice(this.basic.indexOf(item), 1);
    this.dataServe.save(this.basic);
  }

  refresh() {
    this.basic = this.student;
    this.dataServe.save(this.basic);
  }

}
