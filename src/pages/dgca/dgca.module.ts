import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DgcaPage } from './dgca';

@NgModule({
  declarations: [
    DgcaPage,
  ],
  imports: [
    IonicPageModule.forChild(DgcaPage),
  ],
  exports: [
    DgcaPage
  ]
})
export class DgcaPageModule {}
