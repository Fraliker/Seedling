import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { DataStore } from '../../providers/data-store';

@Component({
  selector: 'modal-popup',
  templateUrl: 'popup.html'
})

export class Popup {

	public random : number;

 constructor(public navCtrl: NavController) {
 	this.random = Math.floor(Math.random() * 10);
   console.log(this.random);
 }

}