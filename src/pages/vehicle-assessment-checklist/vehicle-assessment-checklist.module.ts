import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleAssessmentChecklistPage } from './vehicle-assessment-checklist';

@NgModule({
  declarations: [
    VehicleAssessmentChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleAssessmentChecklistPage),
  ],
  exports: [
    VehicleAssessmentChecklistPage
  ]
})
export class VehicleAssessmentChecklistPageModule {}
