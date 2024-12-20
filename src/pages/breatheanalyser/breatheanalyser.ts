import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Alert } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { HomePage } from '../home/home';
import { ApiService } from '../../api/api-service';

@IonicPage()

@Component({
  selector: 'page-breatheanalyser',
  templateUrl: 'breatheanalyser.html',
})

export class BreatheanalyserPage {

  breatheanalyserForm: FormGroup;
  public employeename: any;
  public employeecode: any;
  public currentdate: any;
  public enddate: any;
  public trimmeddate: any;
  public trimmedtime: any;
  public uploadeddate: any;
  public uploadedtime: any;
  myDate: String = new Date().toISOString();
  public body: string;
  public subject: string = "Breathe Analyser Undertaking Form Upload";
  public from_mailid: string = "asma.apron@gvk.com";
  public to_mailid: string = "aproncontrol@csia.gvk.com";
  public cc_mailid: string = localStorage.getItem("email") + "; kunal.dolari@csia.gvk.com; rajesh.jadhav@csia.gvk.com";
  public username: string = "Airside Safety Team";
  Postheaders:any = new Headers();

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loading: LoadingController,
              public alert: AlertController, private apiUrl: ApiService) {

    this.employeename = localStorage.getItem("username");
    this.employeecode = localStorage.getItem("empcode");

    this.myDate = moment().format();

    this.currentdate = new Date();
    this.enddate = new Date();
    this.currentdate.setDate(this.currentdate.getDate() - 1);

    // this.Postheaders.append("Content-Type", "application/json");
    this.Postheaders=this.apiUrl.Old_headers;

  }
  ionViewCanEnter(){
    if( !localStorage.getItem("email")){alert('please sign in');return false}
  }
  ngOnInit() {
    this.initializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreatheanalyserPage');
  }

  private initializeForm() {
    this.breatheanalyserForm = new FormGroup({
      'name': new FormControl(Validators.required),
      'empcode': new FormControl(Validators.required),
      'designation': new FormControl(Validators.required),
      'organization': new FormControl(Validators.required),
      'reportingdate': new FormControl(Validators.required),
      'reportingtime': new FormControl(Validators.required)
    });

    this.breatheanalyserForm.patchValue({
      organization: 'Mumbai International Airport Limited',
      designation: 'Airside Safety Officer'
    });
  }

  onSubmit(){

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const value = this.breatheanalyserForm.value;

    let postparams = value;

    console.log(postparams);

    this.trimmeddate = this.breatheanalyserForm.value.reportingdate;
    this.trimmedtime = this.breatheanalyserForm.value.reportingdate;

    this.uploadeddate = this.trimmeddate.substring(0, 10);
    this.uploadedtime = this.trimmedtime.substring(11);

    const loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    this.http.post(this.apiUrl.apiUrl + '/api/InsertBreatheUndertakingForm', JSON.stringify(postparams), { headers: this.Postheaders })
      .map(res => res.json())
      .subscribe(data => {

        if (data == "-1") {
          loader.dismiss();
          this.showError();
        }
        else {
          loader.dismiss();
          this.showPrompt();
          this.sendEmail();
          this.breatheanalyserForm.reset();
        }
      },
        error => {
          loader.dismiss();
        });

        this.body = "<b>Breathe Analyser Undertaking Form Schedule</b> <br><br> Name Of Official: Mr. " + this.breatheanalyserForm.value.name + ".<br><br> Reporting Date: " + this.uploadeddate + ".<br><br> Reporting Time: " + this.breatheanalyserForm.value.reportingtime + ".<br><br> Uploaded Date: " + this.uploadeddate + ".<br><br> Uploaded Time: " + this.uploadedtime + ".<br><br>Regards<br>ASMA";

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

    console.log(this.cc_mailid);

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

      },
        error => {
          console.log(error);
        });

  }

  showError() {
    let prompt = this.alert.create({
      title: 'Note',
      message: 'The form has been already uploaded!',
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

}
