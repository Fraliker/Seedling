import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BundlesPage } from '../bundles/bundles';

import { DataStore } from '../../providers/data-store';

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
  	this.basic = [
	"Communicate with at least one known family member/ friend in person (not over phone or through text)", 
	"Talk to someone new today",
	"Journal Write - Write about some things that you accomplished today or that you are proud of",
	"Journal Write - Plan out your day for tomorrow - What things do you want to get done.",
	"Finish at least one part of a long time project (personal or from work)",
	"Complete a relaxation hour - Take time away from work and do something you genuinely enjoy",
	"Read a new book about a topic you are interested in",
	"Practice discernment while watching TV or reading the news",
	"Take a long shower/bath",
	"Go jogging for at least 30 minutes"
  	];

  	this.student = [
    "Communicate with at least one known family member/ friend in person (not over phone or through text)",
    "Talk to someone new today",
    "Think about how today went - Write about some things that you accomplished today or that you are proud of",
    "Journal Write - Plan out the next week - What tests/ projects/ assignments do you have coming up? Set manageable goals for yourself to accomplish by this time next week.",
    "Change up your studying tactics - Analyze what has been working for you and what has not. Try developing a new study method in order to maximize those beneftis",
    "Review one set of notes taken in class",
    "Read ahead in a class you are struggling in",
    "Take a walk around the neighborhood",
    "Sleep an hour before you usually do"
    ];


  //console.log(basic);	
  }

  addItem() {


  }
  
  viewItem() {

  }

  saveItem(item) {
  	this.basic.push(item);
  	this.dataServe.save(this.basic);
  }

}
