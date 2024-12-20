import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, IonicPage, Header } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ApiService } from '../../api/api-service';
import { HttpClient } from '@angular/common/http';

export interface ApronObservations {
  stand: string,
  surfcond: string,
  marking: string,
  cleaning: string,
  serviceability: string,
  actiontaken: string,
  lighting: string
}

@IonicPage()

@Component({
  selector: 'page-adhoc-apron-checklist',
  templateUrl: 'adhoc-apron-checklist.html',
  providers: [DatePipe]
})

export class AdhocApronChecklistPage {

  initialrwyOptions: any;
  acceptabilitySigns = ['+', '-', '0'];
  aproncols: any;
  rwyOptions: any;
  ApronObservations: ApronObservations[] = [];
  public observations: any;
  otherobservations: any='';
  apronchecklistForm: FormGroup;
  aproninspected: any;
  public currentdate: any;
  public enddate: any;
  inspectiontimeOptions = ['Ad-hoc'];
  public sendDataToWebservice: any;
  time: any;
  endtime: any;
  date: String = new Date().toISOString();
  user: string;

  public body: string;
  public subject: string = "Checklist Upload: Adhoc Apron Inspection Checklist";
  public from_mailid: string = "asma.apron@gvk.com";
  public to_mailid: string;
  public cc_mailid: string = localStorage.getItem("email");
  public username: string = "Airside Safety Team";
  public userData: any;
  disableButton: boolean;


  Postheaders:any = new Headers();
  


  constructor(public navCtrl: NavController, public navParams: NavParams,public http2:HttpClient ,public http: Http, public datePipe: DatePipe,
    public alert: AlertController, public loading: LoadingController, public storage: Storage, private apiUrl:ApiService) {

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
  onValidate(){
    if(this.ApronObservations!=null){
    for(var i=0;i<this.ApronObservations.length;i++)
    {
 if(this.ApronObservations[i].actiontaken.includes('>') || this.ApronObservations[i].actiontaken.includes('<') || this.ApronObservations[i].actiontaken.includes('{') || this.ApronObservations[i].actiontaken.includes('}'))
 return true
 }
}
 if(this.date==null || this.time== null ||this.endtime==null ||this.to_mailid== null  || this.otherobservations.includes('>') || this.otherobservations.includes('<') || this.otherobservations.includes('{') || this.otherobservations.includes('}')){
  return true;
}else{
  return false;
}

  }

  ionViewDidLoad() {
    let header=this.apiUrl.headers;
    // this.http.get(this.apiUrl.apiUrl + '/api/AreaGroupMaster?id=-1&type=3').map(res => res.json()).subscribe(data1 => {
    //   this.rwyOptions = data1;
    //   this.initialrwyOptions = data1;
    // },
    //   err => {
    //     console.log("error has occured");
    //   });


    // this.http.get(this.apiUrl.apiUrl + '/api/UserAccount').map(res => res.json()).subscribe(data => {

    //   this.userData = data.filter(item => item.AGM_I === 2);
    // },
    //   err => {
    //     console.log("error has occured");
    //   });


    this.http2.get(this.apiUrl.apiUrl + '/api/AreaGroupMaster?id=-1&type=3',{headers:header}).subscribe((data1) => {
      this.rwyOptions = data1;
      this.initialrwyOptions = data1;
    },
      err => {
        console.log("error has occured");
      });


    this.http2.get(this.apiUrl.apiUrl + '/api/UserAccount',{headers:header}).subscribe((data:any[]) => {

      this.userData = data.filter(item => item.AGM_I === 2);
    },
      err => {
        console.log("error has occured");
      });


    this.localStorageSynchronisation();

  }

  addNew() {
    this.disableButton = true; //disable button after one click..
    let header=this.apiUrl.headers;
    // this.http.get(this.apiUrl.apiUrl + '/api/AreaGroupMaster?type=3&id=' + this.aproninspected).map(res => res.json()).subscribe(data1 => {
    //   this.aproncols = data1;
    //   for (let key in this.aproncols) {
    //     console.log(key);
    //     this.ApronObservations.push({
    //       'stand': this.aproncols[key].Areas,
    //       'surfcond': '',
    //       'marking': '',
    //       'lighting': '',
    //       'cleaning': '',
    //       'serviceability': '',
    //       'actiontaken': ''
    //     });
    //   }
    // },
    //   err => {
    //     console.log("error has occured");
    //   });



    this.http2.get(this.apiUrl.apiUrl + '/api/AreaGroupMaster?type=3&id=' + this.aproninspected,{headers:header}).subscribe(data1 => {
      this.aproncols = data1;
      for (let key in this.aproncols) {
        console.log(key);
        this.ApronObservations.push({
          'stand': this.aproncols[key].Areas,
          'surfcond': '',
          'marking': '',
          'lighting': '',
          'cleaning': '',
          'serviceability': '',
          'actiontaken': ''
        });
      }
    },
      err => {
        console.log("error has occured");
      });

    this.rwyOptions = this.rwyOptions.filter(item => item.AG_ID !== this.aproninspected);

  }

  onChange(eve) {
    console.log(eve);
  }

  onSubmit() {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let postparams = {
      'paramset': this.ApronObservations,
      'date': this.date,
      'inspectiontime': this.time,
      'endinspectiontime': this.endtime,
      'otherobservations': this.otherobservations,
      'safetyofficiername': localStorage.getItem("empcode"),
      'dutymanagername': this.to_mailid,
      'isAdhoc': true
    }

    //postparams["safetyofficiername"] = localStorage.getItem("empcode");

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.http.post(this.apiUrl.apiUrl + '/ApronChecklist/InsertApronChecklist', JSON.stringify(postparams), { headers: this.Postheaders })
      .map(res => res.json())
      .subscribe(data => {
        loader.dismiss();
        this.showPrompt();
       this.sendEmail();
        this.ApronObservations = null;
        this.time = null;
        this.endtime = null;
        this.otherobservations = null;
        this.rwyOptions = this.initialrwyOptions;
      },
        error => {
          console.log(error);
          this.saveDataOffline();
          loader.dismiss();
        });

        this.body = "<b>Adhoc Apron Inspection Schedule</b> <br><br> Name Of Safety Officer Mr." + this.user + ".<br><br> Area Inspected: " + this.aproncols[0].Area_Group + ".<br><br> Date: " + this.date + ".<br><br> DM Assigned: " + this.to_mailid +  ".<br><br> Time: " + this.time + " - " + this.endtime + ".<br><br>Regards<br>Airside Safety Team";
  }

  showPrompt() {
    let prompt = this.alert.create({
      title: 'Note',
      message: 'Data Saved Successfully!',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.navCtrl.setRoot(HomePage);
            console.log('Data saved successfully');
          }
        }]
    });
    prompt.present();
  }

  sendEmail() {

    let headers4 = new Headers();
    headers4.append("Content-Type", "application/json");

    //const value = this.apronchecklistForm.value;

    let emailParams = {
      Body: this.body,
      subject: this.subject,
      frm_Email_id: this.from_mailid,
      To_emailID: this.to_mailid,
      Cc_emailID: this.cc_mailid,
      UserName: this.username
    }

    this.http.post(this.apiUrl.apiUrl + '/api/SendEmail', JSON.stringify(emailParams), { headers: this.Postheaders })
      .map(res => res.json()).subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
      });

  }

  saveDataOffline() {
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    let saveOffline = {
      'paramset': this.ApronObservations,
      'date': this.date,
      'inspectiontime': this.time,
      'endinspectiontime': this.endtime,
      'otherobservations': this.otherobservations,
      'safetyofficiername': localStorage.getItem("empcode"),
      'dutymanagername': this.to_mailid,
      'isAdhoc': true
    }

    this.storage.set('ApronChecklistOfflineData', saveOffline);

    loader.dismiss();

    this.showPrompt();
  }

  // Synchronize local storage data with MS SQL Server..
  localStorageSynchronisation() {

    this.storage.get('ApronChecklistOfflineData').then((val) => {

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let params = val;

      this.http.post(this.apiUrl.apiUrl + '/ApronChecklist/InsertApronChecklist', JSON.stringify(params), { headers: this.Postheaders })
        .map(res => res.json())
        .subscribe(data => {
          if (data == "-1") {
            console.log('error');
          }
          else {
           this.sendEmail();
            this.storage.clear();
          }
        },
          error => {
            console.log(error);
          });
    });

  }

}
