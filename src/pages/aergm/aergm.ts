import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiService } from '../../api/api-service';

@IonicPage()

@Component({
  selector: 'page-aergm',
  templateUrl: 'aergm.html',
})

export class AergmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private apiUrl: ApiService) {
 // this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/AIRCRAFT DATA.pdf'),'_system');
 const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/Airport Emergency Response Grid Map of CSMIA wef 10 March 2021.pdf'),'_system');
 browser.show();
    this.navCtrl.setRoot('HomePage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AergmPage');
  }

}
