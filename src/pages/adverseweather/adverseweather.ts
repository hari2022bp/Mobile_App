import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, IonicPage } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ApiService } from '../../api/api-service';
import { HttpClient } from '@angular/common/http';

@IonicPage()

@Component({
  selector: 'page-adverseweather',
  templateUrl: 'adverseweather.html',
  providers: [DatePipe]
})
export class AdverseweatherPage {
  valid = '^[A-Za-z0-9\\s-_:.]{1,}$';
  formData: FormData = new FormData();
  iddata: Array<{ id: string, filename: string }> = [];
  acceptabilitySigns = ['+', '-', '0'];
  public observations: any;
  adverseweatherchecklist: FormGroup;
  public actiontaken1: any;
  public currentdate: any;
  public enddate: any;
  myDate: String = new Date().toISOString();

  public body: string;
  public subject: string = "Checklist Upload: Adverse Weather Checklist";
  public from_mailid: string = "asma.apron@gvk.com";
  public to_mailid: string;
  public cc_mailid: string = localStorage.getItem("email") + "; kunal.dolari@csia.gvk.com; rajesh.jadhav@csia.gvk.com";
  public username: string = "Airside Safety Team";
  public user: any;
  public userData: any;
  Postheaders:any = new Headers();

  constructor(public navCtrl: NavController, public navParams: NavParams,public http2:HttpClient, public http: Http, public datePipe: DatePipe,
    public alert: AlertController, public loading: LoadingController, public storage: Storage, private apiUrl: ApiService) {

      this.myDate = moment().format();
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
    // this.http.get(this.apiUrl.apiUrl + '/api/UserAccount').map(res => res.json()).subscribe(data => {

    //   this.userData = data.filter(item => item.AGM_I === 2);

    // },
    //   err => {
    //     console.log("error has occured");
    //   });


    this.http2.get(this.apiUrl.apiUrl + '/api/UserAccount',{headers:header}).subscribe((data:any[]) => {

      this.userData = data.filter(item => item.AGM_I === 2);

    },
      err => {
        console.log("error has occured");
      });

    this.localStorageSynchronisation();
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.adverseweatherchecklist = new FormGroup({

        'date': new FormControl(Validators.required),
        'inspectiontime': new FormControl(Validators.required),
        'baylocation': new FormControl(null),
        'airline': new FormControl(null),
        'flightno': new FormControl(null),
        'regn': new FormControl(null),
        'auditedby': new FormControl(null),
        'SOName': new FormControl(null),
        'ghaname': new FormControl(null),
        'cleaning': new FormControl(null),
        'caterers': new FormControl(null),
        'cargo': new FormControl(null),
        'fueller': new FormControl(null),

        'landinggear': new FormControl(null),
        'landinggearRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'cabindoor': new FormControl(null),
        'cabindoorRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'aircraftengine': new FormControl(null),
        'aircraftengineRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'aircraftequipment': new FormControl(null),
        'aircraftequipmentRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'equipmentparked': new FormControl(null),
        'equipmentparkedRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'parkingbrake': new FormControl(null),
        'parkingbrakeRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'wheelchokes': new FormControl(null),
        'wheelchokesRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'elevatedplatform': new FormControl(null),
        'elevatedplatformRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'stabilizers': new FormControl(null),
        'stabilizersRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'containers': new FormControl(null),
        'containersRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'emptyuld': new FormControl(null),
        'emptyuldRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'loosematerials': new FormControl(null),
        'loosematerialsRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'looseitems': new FormControl(null),
        'looseitemsRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'fodbins': new FormControl(null),
        'fodbinsRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'jurisdiction': new FormControl(null),
        'jurisdictionRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'unsecureditems': new FormControl(null),
        'unsecureditemsRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'hangarowners': new FormControl(null),
        'hangarownersRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'informgha': new FormControl(null),
        'informghaRemarks': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),




        'dutymanagername': new FormControl(null),



    });

    this.adverseweatherchecklist.patchValue({
      landinggear:	'Yes',
      cabindoor:	'Yes',
      aircraftengine:	'Yes',
      aircraftequipment:	'Yes',
      equipmentparked:	'Yes',
      parkingbrake:	'Yes',
      wheelchokes:	'Yes',
      elevatedplatform:	'Yes',
      stabilizers:	'Yes',
      containers: 'Yes',
      emptyuld:	'Yes',
      loosematerials:	'Yes',
      looseitems:	'Yes',
      fodbins:	'Yes',
      jurisdiction:	'Yes',
      unsecureditems:	'Yes',
      hangarowners:	'Yes',
      informgha:	'Yes',

      SOName: this.user
    });
  }

  onSubmit() {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const value = this.adverseweatherchecklist.value;

    let postparams = value;

    postparams["empid"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = false;
    console.log(JSON.stringify(postparams))

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.http.post(this.apiUrl.apiUrl + '/AdverseWeatherInspection/InsertAdverseWeatherData', JSON.stringify(postparams), { headers: this.Postheaders  })
      .map(res => res.json())
      .subscribe(data => {
        loader.dismiss();
        this.showPrompt();
        this.sendEmail();
        this.adverseweatherchecklist.reset();
      },
        error => {
          console.log(error);
          loader.dismiss();
          this.saveDataOffline();
        });

        this.body = "<b>Adverse Weather Checklist</b> <br><br> Name Of Safety Officer Mr." + this.user + ".<br><br> Date: " + this.adverseweatherchecklist.value.date + ".<br><br> DM Assigned: " + this.adverseweatherchecklist.value.dutymanagername + ".<br><br>Regards<br>ASMA";
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

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const value = this.adverseweatherchecklist.value;

    let emailParams = {
      Body: this.body,
      subject: this.subject,
      frm_Email_id: this.from_mailid,
      To_emailID: value.dutymanagername,
      Cc_emailID: this.cc_mailid,
      UserName: this.username
    }

    this.http.post(this.apiUrl.apiUrl + '/api/SendEmail', JSON.stringify(emailParams), { headers: this.Postheaders  })
      .map(res => res.json()).subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
      });

  }

  // Save Form in Local Storage.
  saveDataOffline() {

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    const value = this.adverseweatherchecklist.value;

    let postparams = value;

    postparams["empid"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = false;

    this.storage.set('AdverseWeatherOfflineData', postparams);

    loader.dismiss();

    this.showPrompt();
  }

  // Synchronize local storage data with MS SQL Server..
  localStorageSynchronisation() {

    this.storage.get('AdverseWeatherOfflineData').then((val) => {

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let params = val;

      this.http.post(this.apiUrl.apiUrl + '/AdverseWeatherInspection/InsertAdverseWeatherData', JSON.stringify(params), { headers: this.Postheaders  })
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
