import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-adhoc-checklists',
  templateUrl: 'adhoc-checklists.html',
})
export class AdhocChecklistsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController) {
  }
  ionViewCanEnter(){
    if( !localStorage.getItem("email")){alert('please sign in');return false}
  }
  onAdhocRunwayChecklist() {
    
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('AdhocRunwayChecklistPage');

    loader.dismiss();
  }

  onAdhocTaxiwayChecklist(){

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('AdhocTaxiwayChecklistPage');

    loader.dismiss();
  }

  onAdhocApronChecklist(){

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('AdhocApronChecklistPage');

    loader.dismiss();
  }

  onAdhocRampChecklist(){

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('AdhocRampAssessmentChecklistPage');

    loader.dismiss();
  }

  onAdhocVehicleChecklist(){

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('AdhocVehicleAssessmentChecklistPage');

    loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdhocChecklistsPage');
  }

}
