import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public https: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonPage');
  }

  tap() {

  }

 

}
