import { Component } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { HomePage } from '../home/home';
import { NavController,NavParams, AlertController, LoadingController, IonicPage  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import { ApiService } from '../../api/api-service';
import { HttpClient } from '@angular/common/http';

export interface VehicleCompliance {

  registration:string,
  drivername:string,
  adpno:string,
  avpno:string,
  agency:string,
  general:string,
  availability: string,
  overspeeding:string,
  displayofobstacle:string,
  serviceableheadlight:string,
  displayoflogo: string,
  remarks: string
}

@IonicPage()

@Component({
  selector: 'page-adhoc-vehicle-assessment-checklist',
  templateUrl: 'adhoc-vehicle-assessment-checklist.html',
  providers: [DatePipe]
})

export class AdhocVehicleAssessmentChecklistPage {

  dutymanagername: any;
  body: string;
  userData: any;
  user: string;
  public currentdate: any;
  public enddate: any;
  vehiclecomplianceobservations: VehicleCompliance[] = [];
  date: String = new Date().toISOString();
  time:string;
  endtime:string;
  location:string;
  public subject: string = "Checklist Upload: Adhoc Vehicle Compliance Checklist";
  public from_mailid: string = "asma.apron@gvk.com";
  public to_mailid: string;
  public cc_mailid: string = localStorage.getItem("email");
  vehicleloc:any =['Domestic','International','OAP Apron'];
  domesticstandcount: number;
  internationalstandcount: number;
  oapstandcount: number;
  disableButton: boolean;
noofvehicles:number=0;
Postheaders:any = new Headers();


  constructor(public http:Http,public http2:HttpClient, public alert: AlertController, public loading: LoadingController,
    public navctrl: NavController, public storage: Storage, private apiUrl:ApiService) {

      this.date = moment().format();
      this.currentdate = new Date();
      this.enddate = new Date();
      this.currentdate.setDate(this.currentdate.getDate() - 1);
      this.user = localStorage.getItem("username");
     // this.Postheaders.append("Content-Type", "application/json");
     this.Postheaders=this.apiUrl.Old_headers;
  }
  ionViewCanEnter(){
    if( !localStorage.getItem("email")){alert('please sign in');return false}
  }
  ionViewDidLoad() {

    let header=this.apiUrl.headers;
    // this.http.get(this.apiUrl.apiUrl + '/api/UserAccount').map(res => res.json()).subscribe( data=> {

    //   this.userData = data.filter( item => item.AGM_I === 2);

    //   },
    //   err => {
    //     console.log("error has occured");
    // });


    this.http2.get(this.apiUrl.apiUrl + '/api/UserAccount',{headers:header}).subscribe( (data:any[])=> {

      this.userData = data.filter( item => item.AGM_I === 2);

      },
      err => {
        console.log("error has occured");
    });



    this.localStorageSynchronisation();
  }



  addNew(){

    this.disableButton = true; //disable button after one click..

    if(this.location == 'Domestic')
    {
    //  this.domesticstandcount = 4;
     this.domesticstandcount = this.noofvehicles;
      for(var i=0; i < this.domesticstandcount; i++)
      {
        this.vehiclecomplianceobservations.push({
          'registration':'',
          'drivername':'',
          'adpno':'',
          'avpno':'',
          'agency':'',
          'general':'OK',
          'availability': 'YES',
          'overspeeding':'NO',
          'displayofobstacle':'YES',
          'serviceableheadlight':'YES',
          'displayoflogo': 'YES',
          'remarks': ''
        });
      }
    }

    if(this.location == 'International')
    {
    //  this.internationalstandcount = 4;
    this.internationalstandcount = this.noofvehicles;
      for(var i=0; i < this.internationalstandcount; i++)
      {
        this.vehiclecomplianceobservations.push({
          'registration':'',
          'drivername':'',
          'adpno':'',
          'avpno':'',
          'agency':'',
          'general':'OK',
          'availability': 'YES',
          'overspeeding':'NO',
          'displayofobstacle':'YES',
          'serviceableheadlight':'YES',
          'displayoflogo': 'YES',
          'remarks': ''
        });
      }
    }
    if(this.location == 'OAP Apron')
    {
     //this.oapstandcount = 2;
     this.oapstandcount =this.noofvehicles;
      for(var i=0; i < this.oapstandcount; i++)
      {
        this.vehiclecomplianceobservations.push({
          'registration':'',
          'drivername':'',
          'adpno':'',
          'avpno':'',
          'agency':'',
          'general':'OK',
          'availability': 'YES',
          'overspeeding':'NO',
          'displayofobstacle':'YES',
          'serviceableheadlight':'YES',
          'displayoflogo': 'YES',
          'remarks': ''
        });
      }
    }
  }
  onValidate(){
    if(this.vehiclecomplianceobservations!=null){
    for(var i=0;i<this.vehiclecomplianceobservations.length;i++){
      console.log(this.vehiclecomplianceobservations[i].adpno)
      if(this.vehiclecomplianceobservations[i].adpno.includes('<') || this.vehiclecomplianceobservations[i].adpno.includes('>') || this.vehiclecomplianceobservations[i].avpno.includes('<') ||this.vehiclecomplianceobservations[i].avpno.includes('>') || this.vehiclecomplianceobservations[i].drivername.includes('>') || this.vehiclecomplianceobservations[i].drivername.includes('<') || this.vehiclecomplianceobservations[i].remarks.includes('<') || this.vehiclecomplianceobservations[i].remarks.includes('>') || this.vehiclecomplianceobservations[i].drivername.includes('<') || this.vehiclecomplianceobservations[i].drivername.includes('>') || this.vehiclecomplianceobservations[i].agency.includes('<') || this.vehiclecomplianceobservations[i].agency.includes('>'))
      {
        return true;
      }
    }
  }
    if(this.date==null || this.time== null ||this.endtime==null ||this.to_mailid== null){
      return true;
    }else{
      return false;
    }
  }
  onSubmit(){

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let postparams ={
      'paramset': this.vehiclecomplianceobservations,
      'date': this.date,
      'inspectiontime': this.time,
      'endinspectiontime':this.endtime,
      'vehiclelocation':this.location,
      'safetyofficiername':localStorage.getItem("username"),
      'dutymanagername': this.to_mailid,
      'isAdhoc': true
    }

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();

    this.http.post(this.apiUrl.apiUrl + '/api/VehicleComplianceMaster',JSON.stringify(postparams),{headers:this.Postheaders})
    .map(res => res.json())
    .subscribe(data => {
        loader.dismiss();
        this.showPrompt();
      // this.sendEmail();
        this.vehiclecomplianceobservations = null;
        this.time = null;
        this.endtime = null;
    },
    error => {
        console.log(error);
        this.saveDataOffline();
        loader.dismiss();
    });

    this.body = "<b>Adhoc Vehicle Inspection Schedule</b> <br><br> Name Of Safety Officer Mr." + this.user + ".<br><br> Area Inspected: " + this.location + ".<br><br> Date: " + this.date + ".<br><br> DM Assigned: " + this.to_mailid +  ".<br><br> Time: " + this.time + " - " + this.endtime + ".<br><br>Regards<br>Airside Safety Team";

  }
  sendEmail(){

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let emailParams={
      Body: this.body,
      subject: this.subject,
      frm_Email_id: this.from_mailid,
      To_emailID: this.to_mailid,
      Cc_emailID: this.cc_mailid,
      UserName: localStorage.getItem("username")
    }

    console.log(emailParams);

      this.http.post(this.apiUrl.apiUrl + '/api/SendEmail',JSON.stringify(emailParams),{ headers : this.Postheaders })
      .map(res => res.json()).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  showPrompt(){
    let prompt = this.alert.create({
      title: 'Note',
      message: 'Checklist Data Saved Successfully!',
      buttons: [
      {
        text: 'OK',
        handler: data => {
          this.navctrl.setRoot(HomePage);
          console.log('Data saved successfully');
        }
      }]
      });
      prompt.present();
  }

  saveDataOffline(){

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    let saveOffline = {
      'paramset': this.vehiclecomplianceobservations,
      'date': this.date,
      'inspectiontime': this.time,
      'endinspectiontime':this.endtime,
      'vehiclelocation':this.location,
      'safetyofficiername':localStorage.getItem("username"),
      'dutymanagername': this.to_mailid
    }

    this.storage.set('VehicleChecklistOfflineData', saveOffline);

    loader.dismiss();

    this.showPrompt();

  }

  // Synchronize local storage data with MS SQL Server..
  localStorageSynchronisation(){

    this.storage.get('VehicleChecklistOfflineData').then((val) => {

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let params = val;

      this.http.post(this.apiUrl.apiUrl + '/api/VehicleComplianceMaster', JSON.stringify(params), { headers: this.Postheaders })
      .map(res => res.json())
      .subscribe(data => {
        if (data == "-1") {
          console.log('error');
        }
        else {
        //  this.sendEmail();
          this.storage.clear();
        }
      },
        error => {
          console.log(error);
        });
    });

  }

}
