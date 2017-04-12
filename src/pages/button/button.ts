import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
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
  	/*
  	this.imageURL = null;
  	this.http.get('https://www.reddit.com/r/aww/top/.json?limit=10&sort=hot').map(res => res.json()).subscribe(data => {
  			this.posts = data.data.children;
  			this.imageURL = this.posts[Math.floor(Math.random() * 10)].data.url.replace('&amp;', '&')
  			console.log(this.posts, this.imageURL);
  		})
  		*/

  }

  tap() {

  }

 

}
