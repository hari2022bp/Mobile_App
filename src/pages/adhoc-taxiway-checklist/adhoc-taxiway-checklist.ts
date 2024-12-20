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
  selector: 'page-adhoc-taxiway-checklist',
  templateUrl: 'adhoc-taxiway-checklist.html',
  providers: [DatePipe]
})
export class AdhocTaxiwayChecklistPage {


// STATUS //
//valid = '^[A-Za-z0-9-_:.]{1,}$'; <-Old Regex
valid = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
lightsStatus = ['Serviceable', 'Unserviceable'];
lightsStatusAll = ['Serviceable', 'Unserviceable', 'Not Applicable'];
commonStatusAcute = ['Acceptable', 'Unacceptable'];
commonStatus = [ 'Acceptable', 'Unacceptable', 'Not Applicable'];
uniqueStatusOne = ['Present', 'Not Present'];
uniqueStatusTwo = ['Dry', 'Damp', 'Wet', 'Standing Water'];
acceptabilitySigns = ['+', '-', '0'];
  public observations: any;
  taxiwaychecklistForm: FormGroup;
  public actiontaken1: any;
  public currentdate: any;
  public enddate: any;
  rwyOptions: any;
  inspectiontimeOptions = ['Ad-hoc'];
  formData: FormData = new FormData();
  iddata: Array<{ id: string, filename: string }> = [];
  myDate: String = new Date().toISOString();

  public body: string;
  public subject: string = "Checklist Upload: Adhoc Taxiway Inspection Checklist";
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
     // 'taxiwayedgelightsNC': new FormControl(null),
      'taxiwaycentrelinelights': new FormControl(null),
      'taxiwaycentrelinelightsAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
    //  'taxiwaycentrelinelightsNC': new FormControl(null),
      'runwayguardlights': new FormControl(null),
      'runwayguardaction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
     // 'runwayguardlightsNC': new FormControl(null),
     'stopbarlights': new FormControl(null),
     'stopbarAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'taxiwaysurfaces': new FormControl(null),
      'taxiwaysurfacesAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
    //  'taxiwaysurfacesNC': new FormControl(null),
      'FOD': new FormControl(null),
      'FODAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
    //  'FODNC': new FormControl(null),
      'taxiwaymarkings': new FormControl(null),
      'taxiwaymarkingsAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'taxiwaymarkingsNC': new FormControl(null),
      // 'obviouspavementdamage': new FormControl(null),
      // 'obviouspavementdamageAction': new FormControl(null),
      // 'obviouspavementdamageNC': new FormControl(null),
      'Obstruction': new FormControl(null),
      'ObstructionAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
    //  'ObstructionNC': new FormControl(null),
      'manholesdraincovers': new FormControl(null),
      'manholesdraincoversAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
    //  'manholesdraincoversNC': new FormControl(null),
      'opencabling': new FormControl(null),
      'opencablingAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
    //  'opencablingNC': new FormControl(null),
      'signslightning': new FormControl(null),
      'signslightningAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
   //   'signslightningNC': new FormControl(null),
      'drainscleanliness': new FormControl(null),
      'drainscleanlinessAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'drainscleanlinessNC': new FormControl(null),
      // 'drainsstructural': new FormControl(null),
      // 'drainsstructuralAction': new FormControl(null),
      // 'drainsstructuralNC': new FormControl(null),
      'winddirectionalindicator': new FormControl(null),
      'winddirectionalindicatorAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'winddirectionalindicatorNC': new FormControl(null),
      'birdsign': new FormControl(null),
      'birdsignAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
    //  'birdsignNC': new FormControl(null),
      'standingwater': new FormControl(null),
      'standingwaterAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
  //    'standingwaterNC': new FormControl(null),
      'airsideworks': new FormControl(null),
      'airsideworksAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
    //  'airsideworksNC': new FormControl(null),
      'spillagesign': new FormControl(null),
      'spillageAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
   //   'spillageNC': new FormControl(null),
     // 'firehazards': new FormControl(null),
   //   'firehazardsAction': new FormControl(null),
   //   'firehazardsNC': new FormControl(null),
      'grasslength': new FormControl(null),
      'grasslengthAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
    //  'grasslengthNC': new FormControl(null),
   //   'opssafety': new FormControl(null),
   //   'opssafetyAction': new FormControl(null),
   //   'opssafetyNC': new FormControl(null),
      'InspectorName': new FormControl(Validators.required),
      'InspectorSign': new FormControl(null),
      'otherobservations': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'dutymanagername': new FormControl(null)
    });

    this.taxiwaychecklistForm.patchValue({
      taxiwayedgelights: '',
      taxiwaycentrelinelights: '',
      runwayguardlights: '',
      taxiwaysurfaces: '',
      FOD: '',
      taxiwaymarkings: '',
      obviouspavementdamage: '',
      Obstruction: '',
      manholesdraincovers: '',
      opencabling: '',
      signslightning: '',
      drainscleanliness: '',
      drainsstructural: '',
      winddirectionalindicator: '',
      birdsign: '',
      standingwater: '',
      airsideworks: '',
      spillagesign: '',
      firehazards: '',
      grasslength: '',
      opssafety: '',
      InspectorSign: 'Airside Safety'
    });
  }

  onSubmit() {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const value = this.taxiwaychecklistForm.value;

    let postparams = value;

    postparams["InspectorName"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = true;

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

        this.body = "<b>Adhoc Taxiway Inspection Schedule</b> <br><br> Name Of Safety Officer Mr." + this.user + ".<br><br> Area Inspected: " + this.taxiwaychecklistForm.value.rwyinspected + ".<br><br> Date: " + this.taxiwaychecklistForm.value.date + ".<br><br> DM Assigned: " + this.taxiwaychecklistForm.value.dutymanagername + ".<br><br> Time: " + this.taxiwaychecklistForm.value.inspectiontime + " - " + this.taxiwaychecklistForm.value.endinspectiontime + ".<br><br>Regards<br>Airside Safety Team";
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

    this.http.post(this.apiUrl.apiUrl + '/api/SendEmail', JSON.stringify(emailParams), { headers: this.Postheaders })
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
    postparams["isAdhoc"] = true;

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

}
