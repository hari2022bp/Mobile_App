import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdhocChecklistsPage } from './adhoc-checklists';

@NgModule({
  declarations: [
    AdhocChecklistsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdhocChecklistsPage),
  ],
  exports: [
    AdhocChecklistsPage
  ]
})
export class AdhocChecklistsPageModule {}
