import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdhocApronChecklistPage } from './adhoc-apron-checklist';

@NgModule({
  declarations: [
    AdhocApronChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(AdhocApronChecklistPage),
  ],
  exports: [
    AdhocApronChecklistPage
  ]
})
export class AdhocApronChecklistPageModule {}
