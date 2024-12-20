import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdhocRampAssessmentChecklistPage } from './adhoc-ramp-assessment-checklist';

@NgModule({
  declarations: [
    AdhocRampAssessmentChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(AdhocRampAssessmentChecklistPage),
  ],
  exports: [
    AdhocRampAssessmentChecklistPage
  ]
})
export class AdhocRampAssessmentChecklistPageModule {}
