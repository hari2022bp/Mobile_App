import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdverseweatherPage } from './adverseweather';

@NgModule({
  declarations: [
    AdverseweatherPage,
  ],
  imports: [
    IonicPageModule.forChild(AdverseweatherPage),
  ],
  exports:[
    AdverseweatherPage
  ]
})
export class AdverseweatherPageModule {}
