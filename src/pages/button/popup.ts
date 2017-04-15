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
	public memes;

 constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
 	this.memes = ["/assets/button-images/butter.jpg", "/assets/button-images/photogenic.jpg", "/assets/button-images/sofa.jpg", "/assets/button-images/travis.jpg"];

 	this.random = Math.floor(Math.random() * this.memes.length);

   console.log(this.random);
 }

 dismiss() {
 	this.viewCtrl.dismiss();
 }

 returnMeme() {
 	return this.memes[this.random];
 }

}