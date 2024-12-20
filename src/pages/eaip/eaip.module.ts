import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EaipPage } from './eaip';

@NgModule({
  declarations: [
    EaipPage,
  ],
  imports: [
    IonicPageModule.forChild(EaipPage),
  ],
  exports:[
    EaipPage
  ]
})
export class EaipPageModule {}
