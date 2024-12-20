import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, IonicPage, Events } from 'ionic-angular';
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
  selector: 'page-adhoc-runway-checklist',
  templateUrl: 'adhoc-runway-checklist.html',
  providers: [DatePipe]
})
export class AdhocRunwayChecklistPage {

  // STATUS //
  //valid = '^[A-Za-z0-9-_:.]{1,}$'; <-Old_REGEX
  valid = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
  lightsStatus = ['Serviceable', 'Unserviceable'];
  lightsStatusAll = ['Serviceable', 'Unserviceable', 'Not Applicable'];
  commonStatusAcute = ['Acceptable', 'Unacceptable'];
  commonStatus = [ 'Acceptable', 'Unacceptable', 'Not Applicable'];
  uniqueStatusOne = ['Present', 'Not Present'];
  uniqueStatusTwo = ['DRY', 'WET', 'SLIPPERY WET', 'STANDING WATER'];

  inspectionType = ['Adhoc Inspection'];
  formData: FormData = new FormData();
  iddata: Array<{ id: string, filename: string }> = [];
  acceptabilitySigns = ['+', '-', '0'];
  public observations: any;
  runwaychecklistForm: FormGroup;
  public actiontaken1: any;
  public currentdate: any;
  public enddate: any;
  rwyOptions = ['14/32', '09/27'];
  myDate: String = new Date().toISOString();
  public body: string;
  public subject: string = "Checklist Upload: Adhoc Runway Inspection Checklist";
  public from_mailid: string = "asma.apron@gvk.com";
  public to_mailid: string;
  public cc_mailid: string = localStorage.getItem("email");
  public username: string = "Airside Safety Team";
  public user: any;
  public userData: any;
  civildeptdata: any;
  ccrdeptdata: any;
  StorageObject: any[] = [];
  StorageObject1: any[]=[];

  Postheaders:any = new Headers();

  constructor(public navCtrl: NavController, public navParams: NavParams,public http2:HttpClient, public http: Http, public datePipe: DatePipe,
    public alert: AlertController, public loading: LoadingController,
    public storage: Storage, public events: Events, private apiUrl: ApiService) {

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

    // this.http.get(this.apiUrl.apiUrl + '/api/UserAccount').map(res => res.json()).subscribe(data => {

    //   this.userData = data.filter(item => item.AGM_I === 2);
    //   console.log(this.userData);
    // },
    //   err => {
    //     console.log("error has occured");
    //   });

    // this.http.get(this.apiUrl.apiUrl + '/api/CCRCivilSign').map(res => res.json()).subscribe(data => {

    //   this.civildeptdata = data.filter(item => item.Department === 'Civil');
    //   this.ccrdeptdata = data.filter(item => item.Department === 'CCR');

    // },
    //   err => {
    //     console.log("error has occured");
    //   });


    this.http2.get(this.apiUrl.apiUrl + '/api/UserAccount',{headers:header}).subscribe((data:any[]) => {

      this.userData = data.filter(item => item.AGM_I === 2);
      console.log(this.userData);
    },
      err => {
        console.log("error has occured");
      });

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

      'inspectiontype': new FormControl(Validators.required),      'approachlightsign': new FormControl(null),
      'approachlightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'approachlightNC': new FormControl(null),
      'runwayedgelightsign': new FormControl(null),
      'runwayedgelightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'runwayedgelightNC': new FormControl(null),
      'papisign': new FormControl(null),
      'papiAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'papiNC': new FormControl(null),
      'runwaycentrelightsign': new FormControl(null),
      'runwaycentrelightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'runwaycentrelightNC': new FormControl(null),
      'runwaythrlightsign': new FormControl(null),
      'runwaythrlightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'runwaythrlightNC': new FormControl(null),
      'runwayendlightsign': new FormControl(null),
      'runwayendlightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'runwayendlightNC': new FormControl(null),
      'runwaytdzlightsign': new FormControl(null),
      'runwaytdzlightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'runwaytdzlightNC': new FormControl(null),
      'retilsandtwylightsign': new FormControl(null),
      'retilsandtwylightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'retilsandtwylightNC': new FormControl(null),
      'sequentialflashinglightsign': new FormControl(null),
      'sequentialflashinglightAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'runwaysurfacesign': new FormControl(null),
      'runwaysurfaceAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'runwaysurfaceNC': new FormControl(null),
      'fodsign': new FormControl(null),
      'fodAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'fodNC': new FormControl(null),
      'runwayshouldersign': new FormControl(null),
      'runwayshoulderAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'runwayshoulderNC': new FormControl(null),
      'runwaymarkingsign': new FormControl(null),
      'runwaymarkingAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'runwaymarkingNC': new FormControl(null),
      'rubberbuildupsign': new FormControl(null),
      'rubberbuildupAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'rubberbuildupNC': new FormControl(null),
      'opencablingsign': new FormControl(null),
      'opencablingAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'opencablingNC': new FormControl(null),
      'lightingvisibilitysign': new FormControl(null),
      'lightingvisibilityAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'lightingvisibilityNC': new FormControl(null),
      'birdsign': new FormControl(null),
      'birdAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'birdNC': new FormControl(null),
      'dampwetsign': new FormControl(null),
      'dampwetAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'dampwetNC': new FormControl(null),
      'spillagesign': new FormControl(null),
      'spillageAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'spillageNC': new FormControl(null),
      'obstructionsign': new FormControl(null),
      'obstructionAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'obstructionNC': new FormControl(null),
      'grasslengthsign': new FormControl(null),
      'grasslengthAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      // 'grasslengthNC': new FormControl(null),
      'InspectorName': new FormControl(Validators.required),
       'InspectorSign': new FormControl(null),
      'otherobservations': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'dutymanagername': new FormControl(null),
      'civildept': new FormControl(Validators.required),
      'ccrdept': new FormControl(Validators.required)
    });

    this.runwaychecklistForm.patchValue({
      approachlightsign: '',
      runwayedgelightsign: '',
      papisign: '',
      runwaycentrelightsign: '',
      runwaythrlightsign: '',
      runwayendlightsign: '',
      runwaytdzlightsign: '',
      retilsandtwylightsign: '',
      sequentialflashinglightsign: '',
      runwaysurfacesign: '',
      fodsign: '',
      runwayshouldersign: '',
      runwaymarkingsign: '',
      rubberbuildupsign: '',
      opencablingsign: '',
      lightingvisibilitysign: '',
      birdsign: '',
      dampwetsign: '',
      spillagesign: '',
      obstructionsign: '',
      grasslengthsign: '',
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
    postparams["isAdhoc"] = true;

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.http.post(this.apiUrl.apiUrl + '/RunwayChecklist/InsertNewRunwayChecklist', JSON.stringify(postparams), { headers: this.Postheaders })
      .map(res => res.json())
      .subscribe(data => {
      //  loader.dismiss();
        console.log(data);
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

    this.body = "<b>Adhoc Runway Inspection Schedule</b> <br><br> Name Of Safety Officer Mr." + this.user +  ".<br><br> Runway Inspected: " + this.runwaychecklistForm.value.rwyinspected +  ".<br><br> Date: " + this.runwaychecklistForm.value.date + ".<br><br> DM Assigned: " + this.runwaychecklistForm.value.dutymanagername + ".<br><br> Time: " + this.runwaychecklistForm.value.inspectiontime + " - " + this.runwaychecklistForm.value.endinspectiontime + ".<br><br>Regards<br>Airside Safety Team";
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

    this.http.post(this.apiUrl.apiUrl + '/api/SendEmail', JSON.stringify(emailParams), { headers:this.Postheaders })
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
    postparams["isAdhoc"] = true;

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
