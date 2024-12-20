import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AciPage } from './aci';

@NgModule({
  declarations: [
    AciPage,
  ],
  imports: [
    IonicPageModule.forChild(AciPage),
  ],
  exports:[
    AciPage
  ]
})
export class AciPageModule {}
