import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AircraftDataPage } from './aircraft-data';

@NgModule({
  declarations: [
    AircraftDataPage,
  ],
  imports: [
    IonicPageModule.forChild(AircraftDataPage),
  ],
  exports:[
    AircraftDataPage
  ]
})
export class AircraftDataPageModule {}
