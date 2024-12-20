import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()

@Component({
  selector: 'page-eaip',
  templateUrl: 'eaip.html',
})
export class EaipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {

    const browser = this.iab.create('https://aim-india.aai.aero/');
    browser.show();
    this.navCtrl.setRoot('HomePage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EaipPage');
  }

}
