import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

/*
  Generated class for the DataStore provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataStore {

  public isRegistered;
  public defaultBundle;

  constructor(public storage: Storage) {
    this.isRegistered = false;
    
    console.log('Hello DataStore Provider');
  }

  getData() {
  	return this.storage.get('list');
  }

  getBasic() {
    return this.storage.get('basic');
  }

  getStudent() {
    return this.storage.get('student');
  }

  getLevels() {
    return this.storage.get('levels');
  }

  register() {
    this.isRegistered = true;
  }


  setDefaultBundle(index) {
    let newList;
    this.defaultBundle = index;
    if(index == 0) {
      let basic = [{
        enabled: true,
        text: "Communicate with at least one known family member/ friend in person (not over phone or through text)"
      }, {
        enabled: true,
        text: "Talk to someone new today"
      },{
        enabled: true,
        text: "Journal Write - Write about some things that you accomplished today or that you are proud of"
      },{
        enabled: true,
        text: "Journal Write - Plan out your day for tomorrow - What things do you want to get done."
      },{
        enabled: true,
        text: "Finish at least one part of a long time project (personal or from work)"
      },{
        enabled: true,
        text: "Complete a relaxation hour - Take time away from work and do something you genuinely enjoy"
      },{
        enabled: true,
        text: "Read a new book about a topic you are interested in"
      },{
        enabled: true,
        text: "Practice discernment while watching TV or reading the news"
      },{
        enabled: true,
        text: "Take a long shower/bath"
      },{
        enabled: true,
        text: "Go jogging for at least 30 minutes"
      },];
      newList = JSON.stringify(basic);
    }
    else if(index == 1) {
     let student = [{
        enabled: true,
        text: "Communicate with at least one known family member/ friend in person (not over phone or through text)"
      }, {
        enabled: true,
        text: "Talk to someone new today"
      },{
        enabled: true,
        text: "Think about how today went - Write about some things that you accomplished today or that you are proud of"
      },{
        enabled: true,
        text: "Journal Write - Plan out the next week - What tests/ projects/ assignments do you have coming up? Set manageable goals for yourself to accomplish by this time next week."
      },{
        enabled: true,
        text: "Change up your studying tactics - Analyze what has been working for you and what has not. Try developing a new study method in order to maximize those beneftis"
      },{
        enabled: true,
        text: "Go over notes taken in class"
      },{
        enabled: true,
        text: "Take at least an hour break while studying tonight"
      },{
        enabled: true,
        text: "Read ahead in a class you are struggling in"
      },{
        enabled: true,
        text: "Take a walk around the neighborhood"
      },{
        enabled: true,
        text: "Sleep an hour before you usually do"
      },];
      newList = JSON.stringify(student);
    }
    else if(index == 2) {
      let fitness = [];
      newList = JSON.stringify(fitness);
    }

    this.storage.set('list', newList);
    this.storage.set('totalComplete', JSON.stringify(0));


  }

  getRegistered() {
    return this.isRegistered;
  }

  completeOne() {
    let completed;
    this.getCompleted().then((totalComplete) => {
      if(totalComplete) {
        console.log('entered2');
        completed = JSON.parse(totalComplete);
        ++completed;
        let newComplete = JSON.stringify(completed);
        this.storage.set('totalComplete', newComplete);
      }
    }).catch(error => {
        console.log(error);
      })
  }

  getCompleted() {
    console.log('retrieved', this.storage.get('totalComplete'));
    //this.storage.ready().then(() => {
         return this.storage.get('totalComplete');
    //});
  }



  save(data) {
  	let newData = JSON.stringify(data);
  	this.storage.set('list', newData);
  }
}
