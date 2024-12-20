import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdhocRunwayChecklistPage } from './adhoc-runway-checklist';

@NgModule({
  declarations: [
    AdhocRunwayChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(AdhocRunwayChecklistPage),
  ],
  exports:[
    AdhocRunwayChecklistPage
  ]
})
export class AdhocRunwayChecklistPageModule {}
