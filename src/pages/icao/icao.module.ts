import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IcaoPage } from './icao';

@NgModule({
  declarations: [
    IcaoPage,
  ],
  imports: [
    IonicPageModule.forChild(IcaoPage),
  ],
  exports:[
    IcaoPage
  ]
})
export class IcaoPageModule {}
