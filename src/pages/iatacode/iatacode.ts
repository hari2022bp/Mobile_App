import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-iatacode',
  templateUrl: 'iatacode.html',
})
export class IatacodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    const browser = this.iab.create('https://en.wikipedia.org/wiki/List_of_airports_by_IATA_code:_A');
    browser.show();
    this.navCtrl.setRoot('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IatacodePage');
  }

}
