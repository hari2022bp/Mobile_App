import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightradarPage } from './flightradar';

@NgModule({
  declarations: [
    FlightradarPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightradarPage),
  ],
  exports: [
    FlightradarPage
  ]
})
export class FlightradarPageModule {}
