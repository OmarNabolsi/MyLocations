
import { Location } from './../../models/location';
import { SetLocationPage } from './../set-location/set-location';
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  location: Location = {
    lat: 25.119865401879437,
    lng: 55.372692346572876
  };
  locationIsSet = false;

  constructor(private modalCtrl: ModalController, 
    private geoLocation: Geolocation, private loadingCtrl:) {}

  onSubmit(form: NgForm) {
    console.log(form);
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage, {location: this.location, isSet: this.locationIsSet});
    modal.present();
    modal.onDidDismiss(
      data => {
        if (data) {
          this.location = data.location;
          this.locationIsSet = true;
        }
      });
  }

  onLocate() {
    this.geoLocation.getCurrentPosition()
      .then(
        location => {
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
          this.locationIsSet = true;
        }
      )
      .catch(
        error => {
          console.log(error);
        }
      );
  }
}
