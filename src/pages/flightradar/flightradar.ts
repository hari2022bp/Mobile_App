import { Component } from '@angular/core';
import { NavController,NavParams, IonicPage } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-flightradar',
  templateUrl: 'flightradar.html',
})
export class FlightradarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public iab: InAppBrowser) {

      const browser = this.iab.create('https://www.flightradar24.com/');
      browser.show();
      this.navCtrl.setRoot('HomePage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightradarPage');
  }

}
