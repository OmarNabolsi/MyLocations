import { Location } from './../../models/location';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
  location: Location;
  
  constructor(private navParams: NavParams) {
    this.location = this.navParams.get('location');
  }

}
