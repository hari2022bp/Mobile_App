import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()

@Component({
  selector: 'page-dgca',
  templateUrl: 'dgca.html',
})
export class DgcaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {

    const browser = this.iab.create('https://dgca.gov.in/digigov-portal/');
    browser.show();
    this.navCtrl.setRoot('HomePage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DgcaPage');
  }

}
