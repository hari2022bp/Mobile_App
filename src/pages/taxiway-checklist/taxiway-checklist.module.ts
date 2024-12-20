import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxiwayChecklistPage } from './taxiway-checklist';

@NgModule({
  declarations: [
    TaxiwayChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(TaxiwayChecklistPage),
  ],
  exports: [
    TaxiwayChecklistPage
  ]
})

export class TaxiwayChecklistPageModule {}
