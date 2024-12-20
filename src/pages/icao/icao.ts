import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiService } from '../../api/api-service';

@IonicPage()

@Component({
  selector: 'page-icao',
  templateUrl: 'icao.html',
})

export class IcaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private apiUrl: ApiService) {

  }
  ionViewCanEnter(){
    if( !localStorage.getItem("email")){alert('please sign in');return false}
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IcaoPage');
  }

  onICAODoc1(){
    //  this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/AIRCRAFT DATA.pdf'),'_system');
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/DOC 9157 part 4.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc2(){
     //this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/AIRCRAFT DATA.pdf'),'_system');
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-9157ADM-PART3.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc3(){
     // this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/AIRCRAFT DATA.pdf'),'_system');
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ADM PART 5.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc4(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ADM PART 6.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc5(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ADM(9157) PART 2.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc6(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ADM-PART 3.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc7(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ADM-Part-1 RWYS.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc8(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ASM-PART 1.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc9(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ASM-PART 2.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc10(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ASM-PART 5.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc11(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ASM-PART 6.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc12(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO-ASM-PART 7.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc13(){
      const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/ICAO_9981.pdf'),'_system');
      browser.show();
      this.navCtrl.setRoot('HomePage');
     }
     onICAODoc14(){
       const browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/Doc 9432 - Manual Radiotelephony Ed 4 (En).pdf'),'_system');
       browser.show();
       this.navCtrl.setRoot('HomePage');
     }

}
