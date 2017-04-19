import { Component } from '@angular/core';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	private todo : FormGroup;
  
  constructor( private formBuilder: FormBuilder, public navCtrl : NavController ) {
    this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  logForm(){
    console.log(this.todo.value)
  }

  sendEmail() {
    /*
    cordova.plugins.email.isAvailable(
      function (isAvailable) {
        if(isAvailable) {
          cordova.plugins.email.open({
            to:      'max@mustermann.de',
            subject: 'Greetings',
            body:    'How are you? Nice greetings from Leipzig'
        
        });
        }
      }
  );
  */
  }

}
