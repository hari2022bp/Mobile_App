import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,Loading } from 'ionic-angular';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import * as moment from 'moment';
import { ApiService } from '../../api/api-service';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';  
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ZuluTaxiwayChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zulu-taxiway-checklist',
  templateUrl: 'zulu-taxiway-checklist.html',
})
export class ZuluTaxiwayChecklistPage {

  myDate: String = new Date().toISOString();
  zulutaxiwaychecklistForm:FormGroup;
  public currentdate: any;
  public enddate: any;
  rwyOptions: any;


  valid = '^[A-Za-z0-9\\s-_:.]{1,}$';
  GHAGSEStatus = ['Cleared', 'Not Cleared'];
  STANDStatus = ['Available', 'Not Available'];
  LIGHTS_Status = ['Placed', 'Not Placed'];
  SIGN_Status = ['Masked', 'Unmasked'];


  formData: FormData = new FormData();
  iddata: Array<{ id: string, filename: string }> = [];

  public body: string;
  public subject: string = "Checklist Upload: Zulu Taxiway Inspection Checklist";
  public from_mailid: string = "asma.apron@gvk.com";
  public to_mailid: string;
  public cc_mailid: string = localStorage.getItem("email");


  public username: string = "Airside Safety Team";
  public user: any;
  public userData: any;
  Postheaders:any = new Headers();

  constructor(public navCtrl: NavController, public navParams: NavParams,public http2:HttpClient , public http: Http, 
    public alert: AlertController, public loading: LoadingController, public storage: Storage,  private apiUrl: ApiService) {
    this.myDate = moment().format();

    this.currentdate = new Date();
    this.enddate = new Date();
    this.currentdate.setDate(this.currentdate.getDate() - 1);

    this.user = localStorage.getItem("username");
    // this.Postheaders.append("Content-Type", "application/json");
    this.Postheaders=this.apiUrl.Old_headers;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZuluTaxiwayChecklistPage');

    let header=this.apiUrl.headers;
    // this.http.get(this.apiUrl.apiUrl + '/api/AreaGroupMaster?id=2&type=4').map(res => res.json()).subscribe(data1 => {
    //   this.rwyOptions = data1;
    //   console.log("data");
    //   console.log(JSON.stringify(data1))
    // },
    //   err => {
    //     console.log("error has occured");
    //   });


    //   this.http.get(this.apiUrl.apiUrl + '/api/UserAccount').map(res => res.json()).subscribe(data => {

    //     this.userData = data.filter(item => item.AGM_I === 2);
    //     console.log(this.userData);
    //   },
    //     err => {
    //       console.log("error has occured");
    //     });


    
    this.http2.get(this.apiUrl.apiUrl + '/api/AreaGroupMaster?id=2&type=4',{headers:header}).subscribe((data1:any[]) => {
      this.rwyOptions = data1;
      console.log("data");
      console.log(JSON.stringify(data1))
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
  




  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm()
  {
    this.zulutaxiwaychecklistForm=new FormGroup({
      'date':new FormControl(),
      'rwyinspected': new FormControl(Validators.required),
      'inspectiontime': new FormControl(Validators.required),
      'endinspectiontime': new FormControl(Validators.required),
      'GHAGSE': new FormControl(null),
      'GHAGSEAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'Cones': new FormControl(null),
      'ConesAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'Chocks': new FormControl(null),
      'ChocksAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'G6': new FormControl(null),
      'G6Action': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'G7': new FormControl(null),
      'G7Action': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'G8': new FormControl(null),
      'G8Action': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      
      'TemporaryOBSLights': new FormControl(null),
      'TemporaryOBSLightsAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

      'Waterfilledbarricades': new FormControl(null),
      'WaterfilledbarricadesAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

      'MaskingUnmaskingsigns': new FormControl(null),
      'MaskingUnmaskingsignsAction': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

      'InspectorName': new FormControl(Validators.required),
      'InspectorSign': new FormControl(null),
      
      'otherobservations': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
      'dutymanagername': new FormControl(null)
    })


    this.zulutaxiwaychecklistForm.patchValue({
      GHAGSE: 'Cleared',
      Cones: 'Cleared',
      Chocks: 'Cleared',
      
      G6:'Available',
      G7:'Available',
      G8:'Available',

      TemporaryOBSLights:'Placed',
      Waterfilledbarricades:'Placed',
      MaskingUnmaskingsigns:'Masked',
      InspectorSign: 'Airside Safety'



    });





  }

  onSubmit(){

    //let headers = new Headers();
    //headers.append("Content-Type", "application/json");
    
    let headers=this.apiUrl.Old_headers;
    const value = this.zulutaxiwaychecklistForm.value;

    let postparams = value;

    postparams["InspectorName"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = false;

    console.log(postparams);

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();


    this.http.post(this.apiUrl.apiUrl + '/ZuluTaxiwayChecklist/InsertNewZuluTaxiwayChecklist', JSON.stringify(postparams), { headers: this.Postheaders })
      .map(res => res.json())
      .subscribe(data => {
        if (data == "-1") {
          loader.dismiss();
          this.showError();
          this.saveDataOffline();
        }
        else {
          
          
          console.log("after save return data greater than -1")
          console.log(JSON.stringify(data))
          loader.dismiss();
          this.showPrompt();
          this.sendEmail();
          this.zulutaxiwaychecklistForm.reset();
        }
      },
        error => {
          console.log("excepton save")
          console.log(error);
          loader.dismiss();
          this.saveDataOffline();
      });

    let imageparams = {
      date: value.date,
      Time: value.inspectiontime,
      imagepara: this.iddata
    }

    // let headers2 = new Headers()
    // headers.append('Content-Type', 'json');
    // headers.append('Accept', 'application/json');
    let headers2=this.apiUrl.Old_headers;


     console.log(JSON.stringify(this.formData));
    this.http.post(this.apiUrl.apiUrl + '/api/UploadImage', this.formData, { headers: this.Postheaders })
      .map(res => res.json()).subscribe(data => {
     
        console.log("upld img");
     console.log(JSON.stringify(data));
      },
        error => {
          console.log(error);
        });

    this.http.post(this.apiUrl.apiUrl + '/api/RunwayImageData', imageparams, { headers: this.Postheaders })
      .map(res => res.json()).subscribe(data => {
        //this.showPrompt();


        console.log("run img data");

      },
        error => {
          console.log(error);
        });

    this.body = "<b>Taxiway Inspection Schedule</b> <br><br> Name Of Safety Officer Mr." + this.user + ".<br><br> Area Inspected: " + this.zulutaxiwaychecklistForm.value.rwyinspected + ".<br><br> Date: " + this.zulutaxiwaychecklistForm.value.date + ".<br><br> DM Assigned: " + this.zulutaxiwaychecklistForm.value.dutymanagername + ".<br><br> Observation reported: " + this.zulutaxiwaychecklistForm.value.otherobservations + ".<br><br> Time: " + this.zulutaxiwaychecklistForm.value.inspectiontime + " - " + this.zulutaxiwaychecklistForm.value.endinspectiontime + ".<br><br>Regards<br>ASMA";
  

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

    // let headers4 = new Headers();
    // headers4.append("Content-Type", "application/json");
    // headers4.append("Accept", 'application/json');
    let headers4=this.apiUrl.Old_headers;

    const value = this.zulutaxiwaychecklistForm.value;

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

  const value = this.zulutaxiwaychecklistForm.value;

  let postparams = value;

  postparams["InspectorName"] = localStorage.getItem("empcode");
  postparams["isAdhoc"] = false;

  this.storage.set('ZuluTaxiwayChecklistOfflineData', postparams);

  loader.dismiss();

  this.showPrompt();

}

}
