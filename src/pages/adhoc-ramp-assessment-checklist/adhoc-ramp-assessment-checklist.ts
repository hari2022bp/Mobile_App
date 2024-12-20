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
  selector: 'page-adhoc-ramp-assessment-checklist',
  templateUrl: 'adhoc-ramp-assessment-checklist.html',
  providers: [DatePipe]
})

export class AdhocRampAssessmentChecklistPage {
  valid = '^[A-Za-z0-9-_:.]{1,}$';
  formData: FormData = new FormData();
  iddata: Array<{ id: string, filename: string }> = [];
  acceptabilitySigns = ['+', '-', '0'];
  public observations: any;
  ramphandlingassessmentForm: FormGroup;
  public actiontaken1: any;
  public currentdate: any;
  public enddate: any;
  myDate: String = new Date().toISOString();

  public body: string;
  public subject: string = "Checklist Upload: Ramp Handling Assessment Checklist";
  public from_mailid: string = "asma.apron@gvk.com";
  public to_mailid: string;
  public cc_mailid: string = localStorage.getItem("email");
  public username: string = "Airside Safety Team";
  public user: any;
  public userData: any;
  Postheaders:any = new Headers();

  constructor(public navCtrl: NavController, public navParams: NavParams,public http2:HttpClient, public http: Http, public datePipe: DatePipe,
    public alert: AlertController, public loading: LoadingController, public storage: Storage, private apiUrl:ApiService) {

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
      }) ;




  //  this.localStorageSynchronisation();
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.ramphandlingassessmentForm = new FormGroup({

        'date': new FormControl(Validators.required),
        'inspectiontime': new FormControl(Validators.required),
        'baylocation': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
        'airline': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
        'flightno': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
        'regn': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
        'auditedby': new FormControl(null),
        'SOName': new FormControl(null),
        'ghaname': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
     //   'subhandlingagent': new FormControl(null),
        'cleaning': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
        'caterers': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
        'cargo': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
        'fueller': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'staffallocation': new FormControl(null),
        'groundfacilityRemarks01': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'gseavailability': new FormControl(null),
        'groundfacilityRemarks02': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'pavedsurfacecondition': new FormControl(null),
        'groundfacilityRemarks03': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'safetylinesavailability': new FormControl(null),
        'groundfacilityRemarks04': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'looseitems': new FormControl(null),
        'groundfacilityRemarks05': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'clearoffod': new FormControl(null),
        'groundfacilityRemarks06': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'fodbinsavailable': new FormControl(null),
        'groundfacilityRemarks07': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'apronfloodlighting': new FormControl(null),
        'groundfacilityRemarks08': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'equipmentparking': new FormControl(null),
        'groundfacilityRemarks09': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'vehiclespeedlimit': new FormControl(null),
        'groundfacilityRemarks10': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'vdgsserviceability': new FormControl(null),
        'groundfacilityRemarks11': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'correctvdgsupdation': new FormControl(null),
        'groundfacilityRemarks12': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'pbbposition': new FormControl(null),
        'groundfacilityRemarks13': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'warningsignalsound': new FormControl(null),
        'groundfacilityRemarks14': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'clearofobstructions': new FormControl(null),
        'groundfacilityRemarks15': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),
           'anticollisionlights': new FormControl(null),
        'turnarounddepartureRemarks01': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'cargonetting': new FormControl(null),
        'turnarounddepartureRemarks02': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'speedadherance': new FormControl(null),
        'turnarounddepartureRemarks03': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'monitorpassengermovement': new FormControl(null),
        'turnarounddepartureRemarks04': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'movingconveyorbelt': new FormControl(null),
        'turnarounddepartureRemarks05': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'gselowered': new FormControl(null),
        'turnarounddepartureRemarks06': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'guidecateringvehicle': new FormControl(null),
        'turnarounddepartureRemarks07': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'cateringvehiclebrake': new FormControl(null),
        'turnarounddepartureRemarks08': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'safetyrails': new FormControl(null),
        'turnarounddepartureRemarks09': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'cateringvehiclealarm': new FormControl(null),
        'turnarounddepartureRemarks10': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'vehicleunderneathfuselage': new FormControl(null),
        'turnarounddepartureRemarks11': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'equipmentretrievedfromstand': new FormControl(null),
        'turnarounddepartureRemarks12': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'pbbdisconnected': new FormControl(null),
        'turnarounddepartureRemarks13': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'oilspillagenoticed': new FormControl(null),
        'turnarounddepartureRemarks14': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'driverauthorization': new FormControl(null),
        'turnarounddepartureRemarks15': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'anticollisionlightsapproach': new FormControl(null),
        'turnarounddepartureRemarks16': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'equipmentmarshalleravailable': new FormControl(null),
        'turnarounddepartureRemarks17': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'trafficalertedpushback': new FormControl(null),
        'turnarounddepartureRemarks18': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'redhatchedarea': new FormControl(null),
        'turnarounddepartureRemarks19': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'vehicleunattended': new FormControl(null),
        'turnarounddepartureRemarks20': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'safetyconesavailable': new FormControl(null),
        'turnarounddepartureRemarks21': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'gearshiftneutral': new FormControl(null),
        'turnarounddepartureRemarks22': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'uldleftunsecured': new FormControl(null),
        'turnarounddepartureRemarks23': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'secureequipmentprocedure': new FormControl(null),
        'turnarounddepartureRemarks24': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'aircraftchocked': new FormControl(null),
        'turnarounddepartureRemarks25': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'containerserviceable': new FormControl(null),
        'turnarounddepartureRemarks26': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'operationalwaste': new FormControl(null),
        'turnarounddepartureRemarks27': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'towbarattachment': new FormControl(null),
        'turnarounddepartureRemarks28': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'marshalleravailability': new FormControl(null),
        'marshallingRemarks01': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'hydrantfacility': new FormControl(null),
        'refuelingfacilityRemarks01': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'hydrantpits': new FormControl(null),
        'refuelingfacilityRemarks02': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'refuelingzones': new FormControl(null),
        'refuelingfacilityRemarks03': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'fireextinguisher': new FormControl(null),
        'tractorsRemarks01': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'tyrescondition': new FormControl(null),
        'tractorsRemarks02': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'towbarsdisconnected': new FormControl(null),
        'tractorsRemarks03': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),

        'cleanstand': new FormControl(null),
        'standcleanlinessRemarks01': new FormControl(null,{validators:[Validators.pattern(this.valid)]}),


        'dutymanagername': new FormControl(null),
        'NameADPPersonnel': new FormControl(null),
        'ADPNumber': new FormControl(null),
        'ADPAgency': new FormControl(null)

    });

    this.ramphandlingassessmentForm.patchValue({
      staffallocation:	'',
      gseavailability:	'',
      pavedsurfacecondition:	'',
      safetylinesavailability:	'',
      looseitems:	'',
      clearoffod:	'',
      fodbinsavailable:	'',
      apronfloodlighting:	'',
      equipmentparking:	'',
      vehiclespeedlimit: '',
      vdgsserviceability:	'',
      correctvdgsupdation:	'',
      pbbposition:	'',
      warningsignalsound:	'',
      clearofobstructions:	'',
      anticollisionlights:	'',
      cargonetting:	'',
      speedadherance:	'',
      monitorpassengermovement:	'',
      movingconveyorbelt:	'',
      gselowered:	'',
      guidecateringvehicle:	'',
      cateringvehiclebrake:	'',
      safetyrails:	'',
      cateringvehiclealarm:	'',
      vehicleunderneathfuselage:	'',
      equipmentretrievedfromstand:	'',
      pbbdisconnected:	'',
      oilspillagenoticed:	'',
      driverauthorization:	'',
      anticollisionlightsapproach:	'',
      equipmentmarshalleravailable:	'',
      trafficalertedpushback:	'',
      redhatchedarea:	'',
      vehicleunattended:	'',
      safetyconesavailable:	'',
      gearshiftneutral:	'',
      uldleftunsecured:	'',
      secureequipmentprocedure:	'',
      aircraftchocked:	'',
      containerserviceable:	'',
      operationalwaste:	'',
      towbarattachment:	'',
      marshalleravailability:	'',
      hydrantfacility:	'',
      hydrantpits:	'',
      refuelingzones:	'',
      fireextinguisher:	'',
      tyrescondition:	'',
      towbarsdisconnected:	'',
      cleanstand:	'',
      SOName: this.user
    });
  }

  onSubmit() {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const value = this.ramphandlingassessmentForm.value;

    let postparams = value;

    postparams["auditedby"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = true;
    postparams["InterviewDetails"] = "Name: " + this.ramphandlingassessmentForm.value.NameADPPersonnel + "\n ADP No: " + this.ramphandlingassessmentForm.value.ADPNumber + "\n Agency: " + this.ramphandlingassessmentForm.value.ADPAgency;
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.http.post(this.apiUrl.apiUrl + '/RampHandlingAssessmentChecklist/InsertNewRampAssessmentChecklist', JSON.stringify(postparams), { headers: this.Postheaders })
      .map(res => res.json())
      .subscribe(data => {
        loader.dismiss();
        this.showPrompt();
       this.sendEmail();
        this.ramphandlingassessmentForm.reset();
      },
        error => {
          console.log(error);
          loader.dismiss();
          this.saveDataOffline();
        });

        this.body = "<b>Adhoc Ramp Handling Assessment Schedule</b> <br><br> Name Of Safety Officer Mr." + this.user + ".<br><br> Area Inspected: " + this.ramphandlingassessmentForm.value.baylocation + ".<br><br> Date: " + this.ramphandlingassessmentForm.value.date + ".<br><br> DM Assigned: " + this.ramphandlingassessmentForm.value.dutymanagername + ".<br><br>Regards<br>Airside Safety Team";
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

    const value = this.ramphandlingassessmentForm.value;

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

    const value = this.ramphandlingassessmentForm.value;

    let postparams = value;

    postparams["auditedby"] = localStorage.getItem("empcode");
    postparams["isAdhoc"] = true;

    this.storage.set('RampHandlingOfflineData', postparams);

    loader.dismiss();

    this.showPrompt();
  }

  // Synchronize local storage data with MS SQL Server..
  localStorageSynchronisation() {

    this.storage.get('RampHandlingOfflineData').then((val) => {

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let params = val;

      this.http.post(this.apiUrl.apiUrl + '/RampHandlingAssessmentChecklist/InsertNewRampAssessmentChecklist', JSON.stringify(params), { headers: this.Postheaders })
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
