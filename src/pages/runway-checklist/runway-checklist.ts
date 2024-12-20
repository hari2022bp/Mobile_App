import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, IonicPage, Events, Form } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { ApiService } from '../../api/api-service';
import { HttpClient } from '@angular/common/http';

@IonicPage()

@Component({
  selector: 'page-runway-checklist',
  templateUrl: 'runway-checklist.html',
  providers: [DatePipe]
})

export class RunwayChecklistPage {

  // STATUS //

  valid = '^[A-Za-z0-9\\s-_:.]{1,}$';
  lightsStatus = ['Serviceable', 'Unserviceable'];
  lightsStatusAll = ['Serviceable', 'Unserviceable', 'Not Applicable'];
  commonStatusAcute = ['Acceptable', 'Unacceptable'];
  commonStatus = [ 'Acceptable', 'Unacceptable', 'Not Applicable'];
  uniqueStatusOne = ['Present', 'Not Present'];
  uniqueStatusTwo = ['DRY', 'WET', 'SLIPPERY WET', 'STANDING WATER'];

  inspectionType = [ 'Afternoon Inspection', 'Dawn Inspection','Evening Inspection', 'Dusk Inspection', 'Morning Inspection', 'Night Inspection'];

  // STATUS //


  formData: FormData = new FormData();
  iddata: Array<{ id: string, filename: string }> = [];
  acceptabilitySigns = ['+', '-', '0'];
  public observations: any;
  runwaychecklistForm: FormGroup;
  public actiontaken1: any;
  public currentdate: any;
  public enddate: any;
  rwyOptions = ['14/32', '09/27'];//['AMD 01']//['14/32', '09/27'];
  myDate: String = new Date().toISOString();
  public body: string;
  public subject: string = "Checklist Upload: Runway Inspection Checklist";
  public from_mailid: string = "asma.apron@gvk.com";
  public to_mailid: string;
  public cc_mailid: string = localStorage.getItem("email");
  public username: string = "Airside Safety Team";
  public user: any;
  public userData: any;
  civildeptdata: any;
  ccrdeptdata: any;
  StorageObject: any[] = [];
  StorageObject1: any[] = [];

  Postheaders:any = new Headers();

  constructor(public navCtrl: NavController, public navParams: NavParams,public http2:HttpClient, public http: Http, public datePipe: DatePipe,
    public alert: AlertController, public loading: LoadingController,
    public storage: Storage, public events: Events, private apiUrl: ApiService) {
    //storage.clear();
    this.myDate = moment().format();
    console.log(this.myDate);
    this.currentdate = new Date();
    this.enddate = new Date();
    this.currentdate.setDate(this.currentdate.getDate() - 1);
    this.user = localStorage.getItem("username");
   // this.Postheaders.append("Content-Type", "application/json");
   this.Postheaders=this.apiUrl.Old_headers;
  }

  ngOnInit() {
    this.initializeForm();
  }
  ionViewCanEnter(){
    if( !localStorage.getItem("email")){alert('please sign in');return false}
  }
  ionViewDidLoad() {

    // this.http.get(this.apiUrl.apiUrl + '/api/UserAccount').map(res => res.json()).subscribe(data => {

    //   this.userData = data.filter(item => item.AGM_I === 2);
    //   console.log(this.userData);
      
    // },
    //   err => {
    //     console.log("error has occured");
    //   });


//---------------------test---------------------------------------------------
let header=this.apiUrl.headers;
console.log("header while user api call"+JSON.stringify(header))
this.http2.get(this.apiUrl.apiUrl + '/api/UserAccount',{headers:header}).subscribe( (data:any[]) => {

  console.log("  user ");
  console.log(JSON.stringify(data))
  this.userData = data.filter(item => item.AGM_I === 2);
  console.log(this.userData);
  
},
  err => {
    console.log("error has occured");
  });

//----------------------------------------------------------------------------

    // this.http.get(this.apiUrl.apiUrl + '/api/CCRCivilSign').map(res => res.json()).subscribe(data => {

    //   this.civildeptdata = data.filter(item => item.Department === 'Civil');
    //   this.ccrdeptdata = data.filter(item => item.Department === 'CCR');

    // },
    //   err => {
    //     console.log("error has occured");
    //   });

    this.http2.get(this.apiUrl.apiUrl + '/api/CCRCivilSign',{headers:header}).subscribe((data:any[]) => {

      this.civildeptdata = data.filter(item => item.Department === 'Civil');
      this.ccrdeptdata = data.filter(item => item.Department === 'CCR');

    },
      err => {
        console.log("error has occured");
      });





    //this.localStorageSynchronisation();

  }

  private initializeForm() {
    this.runwaychecklistForm = new FormGroup({
      'date': new FormControl(Validators.required),
      'rwyinspected': new FormControl(Validators.required),
      'inspectiontime': new FormControl(Validators.required),
      'endinspectiontime': new FormControl(Validators.required),
      'inspectiontype': new FormControl(Validators.required),
      'approachlightsign': new FormControl(null),
      'approachlightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwayedgelightsign': new FormControl(null),
      'runwayedgelightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'papisign': new FormControl(null),
      'papiAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwaycentrelightsign': new FormControl(null),
      'runwaycentrelightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwaythrlightsign': new FormControl(null),
      'runwaythrlightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwayendlightsign': new FormControl(null),
      'runwayendlightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwaytdzlightsign': new FormControl(null),
      'runwaytdzlightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'retilsandtwylightsign': new FormControl(null),
      'retilsandtwylightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'sequentialflashinglightsign': new FormControl(null),
      'sequentialflashinglightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwaysurfacesign': new FormControl(null),
      'runwaysurfaceAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'fodsign': new FormControl(null),
      'fodAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwayshouldersign': new FormControl(null),
      'runwayshoulderAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwaymarkingsign': new FormControl(null),
      'runwaymarkingAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'rubberbuildupsign': new FormControl(null),
      'rubberbuildupAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'opencablingsign': new FormControl(null),
      'opencablingAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'lightingvisibilitysign': new FormControl(null),
      'lightingvisibilityAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'birdsign': new FormControl(null),
      'birdAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'dampwetsign': new FormControl(null),
      'dampwetAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'spillagesign': new FormControl(null),
      'spillageAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'obstructionsign': new FormControl(null),
      'obstructionAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'grasslengthsign': new FormControl(null),
      'grasslengthAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'InspectorName': new FormControl(Validators.required),
      'InspectorSign': new FormControl(Validators.required),
      'otherobservations': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'dutymanagername': new FormControl(null),
      'civildept': new FormControl(Validators.required),
      'ccrdept': new FormControl(Validators.required)
    });

      this.runwaychecklistForm.patchValue({
        approachlightsign: 'Serviceable',
        runwayedgelightsign: 'Serviceable',
        papisign: 'Serviceable',
        runwaycentrelightsign: 'Serviceable',
        runwaythrlightsign: 'Serviceable',
        runwayendlightsign: 'Serviceable',
        runwaytdzlightsign: 'Serviceable',
        retilsandtwylightsign: 'Serviceable',
        sequentialflashinglightsign: 'Serviceable',
        runwaysurfacesign: 'Acceptable',
        fodsign: 'Not Present',
        runwayshouldersign: 'Acceptable',
        runwaymarkingsign: 'Acceptable',
        rubberbuildupsign: 'Acceptable',
        opencablingsign: 'Not Present',
        lightingvisibilitysign: 'Serviceable',
        birdsign: 'Not Present',
        dampwetsign: 'DRY',
        spillagesign: 'Not Present',
        obstructionsign: 'Acceptable',
        grasslengthsign: 'Acceptable',
        InspectorSign: 'Airside Safety'
      });
  }

  // fileChange(event) {
  //   let fileList: FileList;
  //   fileList = event.target.files;
  //   if (fileList.length > 0) {
  //     let file: File = fileList[0];
  //     var name = file.name;
  //     this.iddata.push({ id: event.target.id, filename: file.name });
  //     this.formData.append(file.name, file, file.name);
  //   }
  // }

  onSubmit() {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const value = this.runwaychecklistForm.value;

    let postparams = value;

    postparams["InspectorName"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = false;

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.http.post(this.apiUrl.apiUrl + '/RunwayChecklist/InsertNewRunwayChecklist', JSON.stringify(postparams), { headers: this.Postheaders })
      .map(res => res.json())
      .subscribe(data => {

        if (data == "-1") {
          loader.dismiss();
          this.showError();
          this.saveDataOffline();
        }
        else {
          loader.dismiss();
          this.showPrompt();
         this.sendEmail();
          this.runwaychecklistForm.reset();
        }
      },
        error => {
          loader.dismiss();
          this.saveDataOffline();
        });


    // let imageparams = {
    //   date: value.date,
    //   Time: value.inspectiontime,
    //   imagepara: this.iddata
    // }

    // let headers2 = new Headers()
    // headers.append('Content-Type', 'json');
    // headers.append('Accept', 'application/json');

    // this.http.post(this.apiUrl.apiUrl + '/api/UploadImage', this.formData, { headers: headers2 })
    //   .map(res => res.json()).subscribe(data => {

    //   },
    //     error => {
    //       console.log(error);
    //     });

    // this.http.post(this.apiUrl.apiUrl + '/api/RunwayImageData', imageparams, { headers: headers2 })
    //   .map(res => res.json()).subscribe(data => {

    //   },
    //     error => {
    //       console.log(error);
    //     });
    // console.log(this.runwaychecklistForm.value.dutymanagername);

    this.body = "<b>Runway Inspection Schedule</b> <br><br> Name Of Safety Officer Mr." + this.user + ".<br><br> Runway Inspected: " + this.runwaychecklistForm.value.rwyinspected + ".<br><br> Date: " + this.runwaychecklistForm.value.date + ".<br><br> DM Assigned: " + this.runwaychecklistForm.value.dutymanagername + ".<br><br> Observation reported: " + this.runwaychecklistForm.value.otherobservations + ".<br><br> Time: " + this.runwaychecklistForm.value.inspectiontime + " - " + this.runwaychecklistForm.value.endinspectiontime + ".<br><br>Regards<br>Airside Safety Team";
  }

  showError() {
    let prompt = this.alert.create({
      title: 'Note',
      message: 'The checklist has been already uploaded!',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Data saved successfully');
          }
        }]
    });
    prompt.present();
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

    const value = this.runwaychecklistForm.value;

    let emailParams = {
      Body: this.body,
      subject: this.subject,
      frm_Email_id: this.from_mailid,
      To_emailID: value.dutymanagername,
      Cc_emailID: this.cc_mailid,
      UserName: this.username
    }

    this.http.post(this.apiUrl.apiUrl + '/api/SendEmail', JSON.stringify(emailParams), { headers: this.Postheaders })
      .map(res => res.json()).subscribe(data => {

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

    const value = this.runwaychecklistForm.value;

    let postparams = value;

    postparams["InspectorName"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = false;

    this.storage.set('RunwayChecklistOfflineData', postparams);

    loader.dismiss();

    this.showPrompt();
  }

  // Synchronize local storage data with MS SQL Server..
  localStorageSynchronisation() {

    this.storage.get('RunwayChecklistOfflineData').then((val) => {

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let params = val;

      // this.http.post(this.apiUrl.apiUrl + '/RunwayChecklist/InsertNewRunwayChecklist', JSON.stringify(params), { headers: headers })
      this.http.post(this.apiUrl.apiUrl + '/RunwayChecklist/InsertNewRunwayChecklist', JSON.stringify(params), { headers: this.Postheaders })
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
