import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdhocTaxiwayChecklistPage } from './adhoc-taxiway-checklist';

@NgModule({
  declarations: [
    AdhocTaxiwayChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(AdhocTaxiwayChecklistPage),
  ],
  exports: [
    AdhocTaxiwayChecklistPage
  ]
})
export class AdhocTaxiwayChecklistPageModule {}
