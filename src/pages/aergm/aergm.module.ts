import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AergmPage } from './aergm';

@NgModule({
  declarations: [
    AergmPage,
  ],
  imports: [
    IonicPageModule.forChild(AergmPage),
  ],
  exports:[
    AergmPage
  ]
})
export class AergmPageModule {}
