import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()

@Component({
  selector: 'page-metar',
  templateUrl: 'metar.html',
})

export class MetarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {

    const browser = this.iab.create('https://en.allmetsat.com/metar-taf/asia.php?icao=VABB');
    browser.show();
    this.navCtrl.setRoot('HomePage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetarPage');
  }

}
