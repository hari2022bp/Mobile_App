import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidationDirective } from './validation.directive';
import { ApronChecklistPage } from './apron-checklist';

@NgModule({
  declarations: [
    ApronChecklistPage,
    ValidationDirective
  ],
  imports: [
    IonicPageModule.forChild(ApronChecklistPage),
  ],
  exports: [
    ApronChecklistPage
  ]
})
export class ApronChecklistPageModule {}
