import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BundlesPage } from '../pages/bundles/bundles';
import { ProgressPage } from '../pages/progress/progress';
import { ButtonPage } from '../pages/button/button';
import { Popup } from '../pages/button/popup';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemViewPage } from '../pages/item-view/item-view';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { DataStore } from '../providers/data-store';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BundlesPage,
    ProgressPage,
    ButtonPage,
    AddItemPage,
    ItemViewPage,
    ProgressBarComponent,
    Popup
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BundlesPage,
    ProgressPage,
    ButtonPage,
    AddItemPage,
    ItemViewPage,
    ProgressBarComponent,
    Popup
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, DataStore]
})
export class AppModule {}
