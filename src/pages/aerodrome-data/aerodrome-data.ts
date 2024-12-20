import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiService } from '../../api/api-service';

@IonicPage()

@Component({
  selector: 'page-aerodrome-data',
  templateUrl: 'aerodrome-data.html',
})

export class AerodromeDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private apiUrl: ApiService) {

    const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/Aerodrome Manual January 2021.pdf'),'_system');
    //  this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/AIRCRAFT DATA.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AerodromeDataPage');
  }

}
