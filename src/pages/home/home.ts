import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  username: string;
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(public navCtrl: NavController, public loading: LoadingController) {
    this.username = localStorage.getItem("username");
  }
  ionViewCanEnter(){
    if( !localStorage.getItem("email")){alert('please sign in');return false}
  }
  onRunwayChecklistPage(){
    
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('RunwayChecklistPage');

    loader.dismiss();
  }

  onTaxiwayChecklistPage(){
    
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('TaxiwayChecklistPage');

    loader.dismiss();
  }

  onApronChecklistPage(){
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('ApronChecklistPage');

    loader.dismiss();
  }

  onAdhocHomeModule(){

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('AdhocChecklistsPage');

    loader.dismiss();
  }

  onRampHandlingChecklistPage(){
    
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('RampHandlingChecklistPage');

    loader.dismiss();
  }

  onVehicleComplianceChecklist(){

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('VehicleAssessmentChecklistPage');

    loader.dismiss();
  }

  onAerodromeData(){
    
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('AerodromeDataPage');

    loader.dismiss();
  }

  onEmailPage(){

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('EmailPage');

    loader.dismiss();
  }

  onAircraftData(){

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('AircraftDataPage');

    loader.dismiss();
  }

}
