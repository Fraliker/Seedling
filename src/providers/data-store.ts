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

  public defaultBundle;
  public totalCompleted : number;

  constructor(public storage: Storage) {
    this.totalCompleted = 0;
    
    console.log('Hello DataStore Provider');
  }

  getData() {
  	return this.storage.get('list');
  }

  register() {
    this.storage.set('registered', true);
  }

  hasRegistered() {
    return this.storage.get('registered');
  }

  getBasic() {
    /*
    this.storage.ready().then(() => {
      // Storage is ready to use
      // Note: ready() is only available in 1.1.7 or greater!
      return this.storage.get('basic');
    }); */
    return this.storage.get('basic');
    
  }

  getStudent() {
    return this.storage.get('student');
  }

  getLevels() {
    return this.storage.get('levels');
  }


  setDefaultBundle(index) {
    let newList;
    this.defaultBundle = index;
    if(index == 0) {
      let basic = [{
        text: "Communicate with at least one known family member/ friend in person (not over phone or through text)"
      }, {
        text: "Talk to someone new today"
      },{
        text: "Journal Write - Write about some things that you accomplished today or that you are proud of"
      },{
        text: "Journal Write - Plan out your day for tomorrow - What things do you want to get done."
      },{
        text: "Finish at least one part of a long time project (personal or from work)"
      },{
        text: "Complete a relaxation hour - Take time away from work and do something you genuinely enjoy"
      },{
        text: "Read a new book about a topic you are interested in"
      },{
        text: "Practice discernment while watching TV or reading the news"
      },{
        text: "Take a long shower/bath"
      },{
        text: "Go jogging for at least 30 minutes"
      },];
      newList = JSON.stringify(basic);
    }
    else if(index == 1) {
     let student = [{
        text: "Communicate with at least one known family member/ friend in person (not over phone or through text)"
      }, {
        text: "Talk to someone new today"
      },{
        text: "Think about how today went - Write about some things that you accomplished today or that you are proud of"
      },{
        text: "Journal Write - Plan out the next week - What tests/ projects/ assignments do you have coming up? Set manageable goals for yourself to accomplish by this time next week."
      },{
        text: "Change up your studying tactics - Analyze what has been working for you and what has not. Try developing a new study method in order to maximize those beneftis"
      },{
        text: "Go over notes taken in class"
      },{
        text: "Take at least an hour break while studying tonight"
      },{
        text: "Read ahead in a class you are struggling in"
      },{
        text: "Take a walk around the neighborhood"
      },{
        text: "Sleep an hour before you usually do"
      },];
      newList = JSON.stringify(student);
    }
    else if(index == 2) {
      let fitness = [{
        text: "Do ten push-ups"
      }, {
        text: "Do ten sit-ups"
      },{
        text: "Jog with a friend for ten minutes"
      },{
        text: "Walk half a mile"
      },{
        text: "Stretch for five minutes"
      },{
        text: "Go to the gym"
      },{
        text: "Learn a yoga pose"
      },{
        text: "Go swimming"
      },{
        text: "Bike around the neighborhood"
      },{
        text: "Meditate for at least 15 minutes"
      },];
      newList = JSON.stringify(fitness);
    }

    this.storage.set('list', newList);
    this.storage.set('complete', JSON.stringify(0));


  }

  /*

  completeOne() {
    let completed;

    completed = this.getCompleted();
    ++completed;
    console.log(completed);
    let newComplete = JSON.stringify(completed);
    this.storage.ready().then(() => {
        this.storage.set('totalComplete', newComplete);
      });
    this.storage.get('totalComplete').then((total) => {
      console.log("total", total);
      })
    
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
    
    let complete : number;

    complete = 0;
    
    this.storage.ready().then(() => {
        this.storage.get('totalComplete').then((total) => {
          
          complete = JSON.parse(total);
          });
      });
    console.log("ready", complete);
    return complete;

  }
  */

  completeOne() {
    this.totalCompleted += 1;
    this.saveComplete(this.totalCompleted);
  }

  getCompleted() {
    this.storage.ready().then(() => {
        this.storage.get('complete').then((total) => {
            this.totalCompleted = JSON.parse(total);
            return this.totalCompleted;
          });
      });
    return this.totalCompleted;
    
  }

  saveComplete(total) {
    this.storage.set('complete', JSON.stringify(total));
  }



  save(data) {
  	let newData = JSON.stringify(data);
  	this.storage.set('list', newData);
  }
}
