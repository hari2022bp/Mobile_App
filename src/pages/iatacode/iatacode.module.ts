import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IatacodePage } from './iatacode';

@NgModule({
  declarations: [
    IatacodePage,
  ],
  imports: [
    IonicPageModule.forChild(IatacodePage),
  ],
  exports: [
    IatacodePage
  ]
})
export class IatacodePageModule {}
