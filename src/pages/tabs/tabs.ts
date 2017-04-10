import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ProgressPage } from '../progress/progress';
import { ButtonPage } from '../button/button';

import { DataStore } from '../../providers/data-store';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ProgressPage;
  tab3Root: any = ContactPage;
  tab4Root: any = AboutPage;
  tab5Root: any = ButtonPage;

  constructor(public dataServe : DataStore) {

  }

  setParams() {

  }
}
