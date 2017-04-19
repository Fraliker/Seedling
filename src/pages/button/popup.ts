import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-popup',
  templateUrl: 'popup.html'
})

export class Popup {

	public random : number;
	public memes;

 constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

	//example: list of www/audio/ folder in cordova/ionic app.
	//this.listDir(cordova.file.applicationDirectory + "assets/audio/");
 	this.memes = ["assets/button-images/butter.jpg", 
 					"assets/button-images/c.jpg",
 					"assets/button-images/d.jpg",
 					"assets/button-images/e.jpg",
 					"assets/button-images/f.jpg",
 					"assets/button-images/h.png",
 					"assets/button-images/v.jpg",
 					"assets/button-images/x.jpg",
 					"assets/button-images/photogenic.jpg", "assets/button-images/sofa.jpg", "assets/button-images/travis.jpg"];


 	this.random = Math.floor(Math.random() * this.memes.length);

   console.log(this.random);


 }

 dismiss() {
 	this.viewCtrl.dismiss();
 }

 /*
	listDir(path){
	  window.resolveLocalFileSystemURL(path,
	    function (fileSystem) {
	      var reader = fileSystem.createReader();
	      reader.readEntries(
	        function (entries) {
	          console.log(entries);
	        },
	        function (err) {
	          console.log(err);
	        }
	      );
	    }, function (err) {
	      console.log(err);
	    }
	  );
	}

	*/

 returnMeme() {
 	console.log(this.memes[this.random]);
 	return this.memes[this.random];
 }

}