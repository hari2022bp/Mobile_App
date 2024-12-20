import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotamPage } from './notam';

@NgModule({
  declarations: [
    NotamPage,
  ],
  imports: [
    IonicPageModule.forChild(NotamPage),
  ],
  exports: [
    NotamPage
  ]
})
export class NotamPageModule {}
