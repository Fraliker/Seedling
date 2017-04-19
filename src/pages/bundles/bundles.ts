import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataStore } from '../../providers/data-store';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-bundles',
  templateUrl: 'bundles.html'
})
export class BundlesPage {

  constructor(public navCtrl: NavController, public dataServe: DataStore) {
  	
  	/*this.dataServe.getRegistered().then((isRegistered) => {
      if(isRegistered){
      	this.navCtrl.setRoot(TabsPage);
      }
    })  */
    

  }
  ionViewDidLoad() {
    let registered;
    this.dataServe.hasRegistered().then((state) => {
        registered = state;
        if(registered) this.navCtrl.setRoot(TabsPage);
      });
  }

  /*

  ionViewCanEnter(): boolean{
   // here we can either return true or false
   // depending on if we want to leave this view
   if(isValid(randomValue)){
      return true;
    } else {
      return false;
    }
  }

  */


  enter(index) {
  	this.dataServe.setDefaultBundle(index);

    this.dataServe.register();

  	this.navCtrl.setRoot(TabsPage);

  }

}
