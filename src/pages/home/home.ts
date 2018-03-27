import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Custom Imports
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  enquiryForm: FormGroup;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder) {

    this.enquiryForm = formBuilder.group ({
      name:[''],
      email:[''],
      comments:['']
    })

  }

}
