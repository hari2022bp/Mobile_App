import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdhocVehicleAssessmentChecklistPage } from './adhoc-vehicle-assessment-checklist';

@NgModule({
  declarations: [
    AdhocVehicleAssessmentChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(AdhocVehicleAssessmentChecklistPage),
  ],
  exports: [
    AdhocVehicleAssessmentChecklistPage
  ]
})
export class AdhocVehicleAssessmentChecklistPageModule {}
