import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()

@Component({
  selector: 'page-aci',
  templateUrl: 'aci.html',
})

export class AciPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {

    const browser = this.iab.create('http://aci.aero/about-aci/priorities/airport-it/digital-transformation');
    browser.show();
    this.navCtrl.setRoot('HomePage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AciPage');
  }

}
