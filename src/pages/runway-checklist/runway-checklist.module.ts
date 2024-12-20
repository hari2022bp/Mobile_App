import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunwayChecklistPage } from './runway-checklist';

@NgModule({
  declarations: [
    RunwayChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(RunwayChecklistPage),
  ],
  exports: [
    RunwayChecklistPage
  ]
})
export class RunwayChecklistPageModule {}
