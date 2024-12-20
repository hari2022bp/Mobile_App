import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RampHandlingChecklistPage } from './ramp-handling-checklist';

@NgModule({
  declarations: [
    RampHandlingChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(RampHandlingChecklistPage),
  ],
  exports: [
    RampHandlingChecklistPage
  ]
})
export class RampHandlingChecklistPageModule {}
