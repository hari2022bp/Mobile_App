import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController, Loading, IonicPage, Form } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ApiService } from '../../api/api-service';
import { HttpClient } from '@angular/common/http';

@IonicPage()

@Component({
  selector: 'page-taxiway-checklist',
  templateUrl: 'taxiway-checklist.html',
  providers: [DatePipe]
})
export class TaxiwayChecklistPage {

  // STATUS //

  valid = '^[A-Za-z0-9\\s-_:.]{1,}$';
  lightsStatus = ['Serviceable', 'Unserviceable'];
  lightsStatusAll = ['Serviceable', 'Unserviceable', 'Not Applicable'];
  commonStatusAcute = ['Acceptable', 'Unacceptable'];
  commonStatus = [ 'Acceptable', 'Unacceptable', 'Not Applicable'];
  uniqueStatusOne = ['Present', 'Not Present'];
  uniqueStatusTwo = ['Dry', 'Damp', 'Wet', 'Standing Water'];

  // STATUS //

  acceptabilitySigns = ['+', '-', '0'];
  public observations: any;
  taxiwaychecklistForm: FormGroup;
  public actiontaken1: any;
  public currentdate: any;
  public enddate: any;
  rwyOptions: any;
 inspectionType = [ 'Afternoon Inspection', 'Dawn Inspection','Evening Inspection', 'Dusk Inspection', 'Morning Inspection', 'Night Inspection'];
  formData: FormData = new FormData();
  iddata: Array<{ id: string, filename: string }> = [];
  myDate: String = new Date().toISOString();

  public body: string;
  public subject: string = "Checklist Upload: Taxiway Inspection Checklist";
  public from_mailid: string = "asma.apron@gvk.com";
  public to_mailid: string;
  public cc_mailid: string = localStorage.getItem("email");
  public username: string = "Airside Safety Team";
  public user: any;
  public userData: any;
  Postheaders:any = new Headers();

  constructor(public navCtrl: NavController, public navParams: NavParams,public http2: HttpClient, public http: Http, public datePipe: DatePipe,
    public alert: AlertController, public loading: LoadingController, public storage: Storage, private apiUrl: ApiService) {
      this.myDate = moment().format();
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

    let header=this.apiUrl.headers;

    // this.http.get(this.apiUrl.apiUrl + '/api/AreaGroupMaster?id=0&type=2').map(res => res.json()).subscribe(data1 => {
    //   this.rwyOptions = data1;

    // },
    //   err => {
    //     console.log("error has occured");
    //   });

    // this.http.get(this.apiUrl.apiUrl + '/api/UserAccount').map(res => res.json()).subscribe(data => {

    //   this.userData = data.filter(item => item.AGM_I === 2);
    //   console.log(this.userData);
    // },
    //   err => {
    //     console.log("error has occured");
    //   });


    this.http2.get(this.apiUrl.apiUrl + '/api/AreaGroupMaster?id=0&type=2',{headers:header}).subscribe((data1:any[]) => {
      this.rwyOptions = data1;

    },
      err => {
        console.log("error has occured");
      });

    this.http2.get(this.apiUrl.apiUrl + '/api/UserAccount',{headers:header}).subscribe((data:any[]) => {

      this.userData = data.filter(item => item.AGM_I === 2);
      console.log(this.userData);
    },
      err => {
        console.log("error has occured");
      });




      //this.localStorageSynchronisation();
  }

  fileChange(event) {

    let fileList: FileList;

    fileList = event.target.files;

    if (fileList.length > 0) {
      let file: File = fileList[0];
      var name = file.name;
      this.iddata.push({ id: event.target.id, filename: file.name });

      this.formData.append(file.name, file, file.name);
    }

  }

  private initializeForm() {
    this.taxiwaychecklistForm = new FormGroup({
      'date': new FormControl(Validators.required),
      'rwyinspected': new FormControl(Validators.required),
      'inspectiontime': new FormControl(Validators.required),
      'endinspectiontime': new FormControl(Validators.required),
      'taxiwayedgelights': new FormControl(null),
      'taxiwayedgelightsAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'taxiwaycentrelinelights': new FormControl(null),
      'taxiwaycentrelinelightsAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwayguardlights': new FormControl(null),
      'runwayguardaction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'stopbarlights': new FormControl(null),
      'stopbarAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'taxiwaysurfaces': new FormControl(null),
      'taxiwaysurfacesAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'FOD': new FormControl(null),
      'FODAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'taxiwaymarkings': new FormControl(null),
      'taxiwaymarkingsAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'Obstruction': new FormControl(null),
      'ObstructionAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'manholesdraincovers': new FormControl(null),
      'manholesdraincoversAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'opencabling': new FormControl(null),
      'opencablingAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'signslightning': new FormControl(null),
      'signslightningAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'drainscleanliness': new FormControl(null),
      'drainscleanlinessAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'winddirectionalindicator': new FormControl(null),
      'winddirectionalindicatorAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'birdsign': new FormControl(null),
      'birdsignAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'standingwater': new FormControl(null),
      'standingwaterAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'airsideworks': new FormControl(null),
      'airsideworksAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'spillagesign': new FormControl(null),
      'spillageAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'grasslength': new FormControl(null),
      'grasslengthAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'InspectorName': new FormControl(Validators.required),
      'InspectorSign': new FormControl(null),
      'otherobservations': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'dutymanagername': new FormControl(null)
    });

    this.taxiwaychecklistForm.patchValue({
      taxiwayedgelights: 'Serviceable',
      taxiwaycentrelinelights: 'Serviceable',
      runwayguardlights: 'Serviceable',
      stopbarlights: 'Serviceable',
      taxiwaysurfaces: 'Acceptable',
      FOD: 'Not Present',
      taxiwaymarkings: 'Acceptable',
      Obstruction: 'Acceptable',
      manholesdraincovers: 'Acceptable',
      opencabling: 'Not Present',
      signslightning: 'Serviceable',
      drainscleanliness: 'Acceptable',
      winddirectionalindicator: 'Present',
      birdsign: 'Not Present',
      standingwater: 'Not Present',
      airsideworks: 'Acceptable',
      spillagesign: 'Not Present',
      grasslength: 'Acceptable',
      InspectorSign: 'Airside Safety'
    });
  }

  onSubmit() {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const value = this.taxiwaychecklistForm.value;

    let postparams = value;

    postparams["InspectorName"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = false;

    console.log(postparams);

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();


    this.http.post(this.apiUrl.apiUrl + '/TaxiwayChecklist/InsertNewTaxiwayChecklist', JSON.stringify(postparams), { headers: this.Postheaders })
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
          this.taxiwaychecklistForm.reset();
        }
      },
        error => {
          console.log(error);
          loader.dismiss();
          this.saveDataOffline();
      });

    let imageparams = {
      date: value.date,
      Time: value.inspectiontime,
      imagepara: this.iddata
    }

    let headers2 = new Headers()
    headers.append('Content-Type', 'json');
    headers.append('Accept', 'application/json');

    this.http.post(this.apiUrl.apiUrl + '/api/UploadImage', this.formData, { headers: this.Postheaders })
      .map(res => res.json()).subscribe(data => {
      },
        error => {
          console.log(error);
        });

    this.http.post(this.apiUrl.apiUrl + '/api/RunwayImageData', imageparams, { headers: this.Postheaders })
      .map(res => res.json()).subscribe(data => {
        //this.showPrompt();
      },
        error => {
          console.log(error);
        });

    this.body = "<b>Taxiway Inspection Schedule</b> <br><br> Name Of Safety Officer Mr." + this.user + ".<br><br> Area Inspected: " + this.taxiwaychecklistForm.value.rwyinspected + ".<br><br> Date: " + this.taxiwaychecklistForm.value.date + ".<br><br> DM Assigned: " + this.taxiwaychecklistForm.value.dutymanagername + ".<br><br> Observation reported: " + this.taxiwaychecklistForm.value.otherobservations + ".<br><br> Time: " + this.taxiwaychecklistForm.value.inspectiontime + " - " + this.taxiwaychecklistForm.value.endinspectiontime + ".<br><br>Regards<br>ASMA";
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
    headers4.append("Accept", 'application/json');

    const value = this.taxiwaychecklistForm.value;

    let emailParams = {
      Body: this.body,
      subject: this.subject,
      frm_Email_id: this.from_mailid,
      To_emailID: value.dutymanagername,
      Cc_emailID: this.cc_mailid,
      UserName: this.username
    }

    this.http.post(this.apiUrl.apiUrl + '/api/SendEmail', JSON.stringify(emailParams), { headers: this.Postheaders})
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

    const value = this.taxiwaychecklistForm.value;

    let postparams = value;

    postparams["InspectorName"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = false;

    this.storage.set('TaxiwayChecklistOfflineData', postparams);

    loader.dismiss();

    this.showPrompt();

  }

  // Synchronize local storage data with MS SQL Server..
  localStorageSynchronisation() {

    this.storage.get('TaxiwayChecklistOfflineData').then((val) => {

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let params = val;

      this.http.post(this.apiUrl.apiUrl + '/TaxiwayChecklist/InsertNewTaxiwayChecklist', JSON.stringify(params), { headers: this.Postheaders })
        .map(res => res.json())
        .subscribe(data => {
          if (data == "-1") {
            console.log("error");
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
  
  onZuluTaxiwayChecklistPage(){
    
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.navCtrl.push('ZuluTaxiwayChecklistPage');

    loader.dismiss();
  }


}
