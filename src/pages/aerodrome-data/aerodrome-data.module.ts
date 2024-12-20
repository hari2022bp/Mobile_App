import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AerodromeDataPage } from './aerodrome-data';

@NgModule({
  declarations: [
    AerodromeDataPage,
  ],
  imports: [
    IonicPageModule.forChild(AerodromeDataPage),
  ],
  exports: [
    AerodromeDataPage
  ]
})
export class AerodromeDataPageModule {}
