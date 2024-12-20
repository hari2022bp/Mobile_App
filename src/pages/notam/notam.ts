import { Component } from '@angular/core';
import { NavController,NavParams, AlertController, LoadingController, IonicPage  } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-notam',
  templateUrl: 'notam.html',
})
export class NotamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public iab: InAppBrowser) {
        
          
                const browser = this.iab.create('https://www.notams.faa.gov/dinsQueryWeb/');
                browser.show();
                this.navCtrl.setRoot('HomePage');
             
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotamPage');
  }

}
