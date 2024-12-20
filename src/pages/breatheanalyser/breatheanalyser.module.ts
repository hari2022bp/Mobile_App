import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreatheanalyserPage } from './breatheanalyser';

@NgModule({
  declarations: [
    BreatheanalyserPage,
  ],
  imports: [
    IonicPageModule.forChild(BreatheanalyserPage),
  ],
  exports: [
    BreatheanalyserPage
  ]
})
export class BreatheanalyserPageModule {}
