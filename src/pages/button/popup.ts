import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { DataStore } from '../../providers/data-store';

@Component({
  selector: 'modal-popup',
  templateUrl: 'popup.html'
})

export class Popup {

	public random : number;

 constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
 	this.random = Math.floor(Math.random() * 6);
   console.log(this.random);
 }

 dismiss() {
 	this.viewCtrl.dismiss();
 }

}