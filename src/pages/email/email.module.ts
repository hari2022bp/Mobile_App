import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailPage } from './email';

@NgModule({
  declarations: [
    EmailPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailPage),
  ],
  exports:[
    EmailPage
  ]
})
export class EmailPageModule {}
