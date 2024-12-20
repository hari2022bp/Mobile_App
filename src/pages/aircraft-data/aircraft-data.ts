import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiService } from '../../api/api-service';

@IonicPage()

@Component({
  selector: 'page-aircraft-data',
  templateUrl: 'aircraft-data.html',
})

export class AircraftDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private apiUrl:ApiService) {

    const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/AIRCRAFT DATA.pdf'),'_system');
    browser.show();
  // window.open(encodeURI('https://docs.google.com/gview?embedded=true&url=http://10.65.127.8:1337/docs/AIRCRAFT DATA.pdf'), '_blank', 'location=yes,EnableViewPortScale=yes');
  // window.open(encodeURI("http://10.65.127.8:1337/docs/AIRCRAFT DATA.pdf"),'_system', 'location=yes');
   this.navCtrl.setRoot('HomePage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AircraftDataPage');
  }

}
