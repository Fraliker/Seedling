import { Component } from '@angular/core';
import { Popup } from '../button/popup';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
/*
  Generated class for the Button page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-button',
  templateUrl: 'button.html'
})
export class ButtonPage {

	posts: any;
	imageURL: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonPage');
  }

  ionViewWillEnter() {

  }

  tap() {
     let popupModal = this.modalCtrl.create(Popup);
     popupModal.present();

  }

 

}



