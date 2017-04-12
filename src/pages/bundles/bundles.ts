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
  	

  }


  enter(index) {
  	this.dataServe.setDefaultBundle(index);

  	this.navCtrl.setRoot(TabsPage);

  }

}
