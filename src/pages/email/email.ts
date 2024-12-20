import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomePage } from '../home/home';
import * as moment from 'moment';
import { ApiService } from '../../api/api-service';
import { HttpClient } from '@angular/common/http';


@IonicPage()

@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})

export class EmailPage {
  departmentList: any;
  priorityList: any;
  department: any;
  priority: any;
  observation: any;
  currentdate: any = new Date().toISOString();
  csiagvklogo: string;

  // Properties For Image Upload
  imagename: string;
  imagea: string[];
  formData: FormData = new FormData();
  emailaddress: any;
  Postheaders:any = new Headers();


  //@Input() multiple: boolean = false;
  //@ViewChild('fileInput', { static: false }) inputEl: ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser,private http2:HttpClient, private http: Http,
    private alert: AlertController, private loading: LoadingController, private apiUrl:ApiService) {

      // this.Postheaders.append("Content-Type", "application/json");
     this.Postheaders=this.apiUrl.Old_headers;
      let header=this.apiUrl.headers;


    // this.http.get(this.apiUrl.apiUrl + '/api/Department').map(res => res.json()).subscribe(data => {
    //   this.departmentList = data;
    // },
    //   err => {
    //     console.log("error has occured");
    //   });

    // this.http.get(this.apiUrl.apiUrl + '/api/Priority').map(res => res.json()).subscribe(data => {
    //   this.priorityList = data;
    // },
    //   err => {
    //     console.log("error has occured");
    // });


    this.http2.get(this.apiUrl.apiUrl + '/api/Department',{headers:header}).subscribe(data => {
      this.departmentList = data;
    },
      err => {
        console.log("error has occured");
      });

    this.http2.get(this.apiUrl.apiUrl + '/api/Priority',{headers:header}).subscribe(data => {
      this.priorityList = data;
    },
      err => {
        console.log("error has occured");
    });



  }
  ionViewCanEnter(){
    if( !localStorage.getItem("email")){alert('please sign in');return false}
  }
  ionViewDidLoad() {

    
    this.currentdate = moment().format("YYYY-MM-DD HH:MM:SS");

    //alert(this.currentdate);

  }


  fileChange(event) {
    let fileList: FileList;
    var arr = [];
    fileList = event.target.files;
    if (fileList.length > 0) {
      for (var i = 0; i < fileList.length; i++) {
        let file: File = fileList[i];
        this.imagename = file.name;
        arr.push(this.imagename);

        this.formData.append(file.name, file, file.name);
        console.log(this.formData);

      }
      this.imagea = arr;

    }

    console.dir("values"+this.imagea);
  }
  onValidate() {


    if (this.department == null || this.priority == null || this.observation == null) {
      return true;
    }
    else {
      return false;
    }

  }

//   onSubmit() {

//     const loader = this.loading.create({
//       content: "Please wait...",
//       duration: 3000
//     });

//     loader.present();

//     let headers = new Headers();
//     //headers.append('Content-Type', 'application/json; charset=UTF-8');
//     headers.append('Content-Type', 'application/json');

//     var array = [];
//     this.imagename = '';

//     if (typeof this.imagea !== 'undefined' && this.imagea.length > 0) {
//       this.imagea.forEach(element => {
//         array.push("<a href='http://10.65.127.8:1337/UploadFile/" + element + "'>Email Attachment</a>")
//         this.imagename = this.imagename + ',' + element
//       });
//     }

//     var emailobservation = this.observation.concat("  EMAIL INITIATED ON:" + this.currentdate);

//     this.csiagvklogo = "http://10.65.127.8:1337/UploadFile/Email_Signature.jpg";

//     let body = "Dear Team,<br><br> " + emailobservation + "<br/> <br />" + array + "<br><br>Regards,<br>" + localStorage.getItem("username") + "<br>Airside Safety Officer - Apron Control<br><br>Mumbai International Airport Ltd<br>Chhatrapati Shivaji Maharaj International Airport LTD<br>1st Floor, Apron Control, Santacruz (E), Mumbai 400 099, India<br>T :  26264444; 26156637   Fax: 26156038  M: 9930144135<br><img src=" + this.csiagvklogo + " /><br><br><br>Our Vision for CSIA: To be one of the World’s best airports that consistently delights customers and be the pride of Mumbai<br><span style='color: green'>Please consider the environment & print this mail/attachments only if absolutely essential</span>"

//     let postparams = {
//       Dept_ID: this.department,
//       Priority: this.priority,
//       observation: emailobservation,
//       ImageName: this.imagename,
//       OfficerName: localStorage.getItem("username"),
//       Emailbody: body
//     }

//     console.log(postparams);
// console.log(this.formData)
//     this.http.post('http://10.65.127.8:1337/api/UploadImage', JSON.stringify(this.formData), { headers: headers })
//       .map(res => res.json()).subscribe(data => {
//       console.log("inside image upload")

//         console.log("Form Data Uploaded" + data);
//       },
//         error => {
//           console.log(error);
//         });

//     var imagearr: string[];

//     for (let item in this.formData) {
//       console.log("Item Inside Form Data" + item);
//     }

//     let headers2 = new Headers();
//     headers2.append("Content-Type", "application/json");

//     this.http.post('http://10.65.127.8:1337/api/Email', JSON.stringify(postparams), { headers: headers2 })
//       .map(res => res.json())
//       .subscribe(data => {
//         this.emailaddress = data;

//         let from_mailid: string = "asma.apron@gvk.com";
//         let to_mailid: string = "";
//         for (let emailid of this.emailaddress) {
//           to_mailid = to_mailid + emailid + ";";
//         }
//         let cc_mailid: string
//         let username: string = "Apron Control Team";

//         // include email report id in subject of email body.
//         let Subject = "*** Observation reported in Airside Operation ***"

//         //sending email to respective department
//         let headers3 = new Headers();
//         headers3.append("Content-Type", "application/json");

//         let emailParams = {
//           Body: body,
//           subject: Subject,
//           frm_Email_id: from_mailid,
//           To_emailID: to_mailid,
//           Cc_emailID: cc_mailid = ""
//         }

//         this.http.post('http://10.65.127.8:1337/api/SendEmail', JSON.stringify(emailParams), { headers: headers3 })
//           .map(res => res.json()).subscribe(data => {
//           },
//             error => {
//               console.log(error);
//             });

//         loader.dismiss();
//         this.showPrompt();
//         this.department = "";
//         this.priority = "";
//         this.observation = "";
//       },

//         error => {
//           console.log(error);
//         });

//   }

onSubmit(){
  const loader = this.loading.create({
          content: "Please wait...",
          duration: 3000
        });

        loader.present();
let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');

    let headers2 = new Headers();
    var array =[];
    this.imagename = '';


    if(typeof this.imagea !== 'undefined' && this.imagea.length > 0){
      this.imagea.forEach(element => {

        array.push("<a href='"+this.apiUrl.apiUrl+"/UploadFile/" + element + "'>Email Attachment</a>")
        this.imagename = this.imagename + ',' + element
      });
    }
    var emailobservation = this.observation.concat(  " EMAIL INITIATED ON: " + this.currentdate );

    this.csiagvklogo = this.apiUrl.apiUrl + "/UploadFile/Email_Signature.jpg";
    
    // let body = "Dear Team,<br><br> " +  emailobservation + "<br/><br />" + "" + array 
    // + "<br><br>Regards,<br>" + localStorage.getItem("username") + "<br>Duty Manager - Apron Control</p><br><br>Mumbai International Airport Ltd<br>Chhatrapati Shivaji Maharaj International Airport LTD<br>1st Floor, Apron Control, Santacruz (E), Mumbai 400 099, India<br>T :  26264444; 26156637   Fax: 26156038  M: 9930144135<br><img src=" + this.csiagvklogo + " /><br><br><br>Our Vision for CSIA: To be one of the World’s best airports that consistently delights customers and be the pride of Mumbai<br><span style='color: green'>Please consider the environment & print this mail/attachments only if absolutely essential</span>"
    
    let body = "<span style='font-family: Adani Light'>Dear Team,</span><br><br> " +"<span style='font-family: Adani Light'>"+  emailobservation + "</span> <br/> <br />" + "<span style='font-family: Adani Light'> " + array 
    + "</span><br><br>Regards,<br><span style='font-family: Adani Light'>" + localStorage.getItem("username") + "</span><br><span style='font-family: Adani Light'>Duty Manager - Apron Control</span><br><br><span style='font-family: Adani Light'>Mumbai International Airport Ltd<br>Chhatrapati Shivaji Maharaj International Airport LTD</span><br><span style='font-family: Adani Light'>1st Floor, Apron Control, Santacruz (E), Mumbai 400 099, India</span><br><span style='font-family: Adani Light'>T :  26264444; 26156637   Fax: 26156038  M: 9930144135</span><br><img src=" + this.csiagvklogo +
     " /><br><br>"
    let postparams = {
      Dept_ID: this.department,
      Priority: this.priority,
      observation: emailobservation,
      ImageName: this.imagename,
      OfficerName: localStorage.getItem("username"),
      Emailbody: body
    }

    console.log(postparams);
    console.log(this.formData);
    this.http.post(this.apiUrl.apiUrl + '/api/UploadImage', this.formData, { headers: this.Postheaders })
      .map(res => res.json()).subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
        });

        var imagearr: string[]
        for(let item in this.formData)
        {
          console.log(item);
        }
          //alert(JSON.stringify(postparams))
        this.http.post(this.apiUrl.apiUrl + '/api/Email', JSON.stringify(postparams), { headers: this.Postheaders })
      .map(res => res.json())
      .subscribe(data => {
        this.emailaddress = data;

        let from_mailid: string = "asma.apron@gvk.com";
        let to_mailid: string = "";
        for (let emailid of this.emailaddress) {
          to_mailid = to_mailid + emailid + ";";
        }
        let cc_mailid: string
        let username: string = "Apron Control Team";

        // include email report id in subject of email body.
        let Subject = "*** Observation reported at Airside Operation ***"

        //sending email to respective department
        let headers3 = new Headers();
        headers3.append("Content-Type", "application/json");

        let emailParams = {
          Body: body,
          subject: Subject,
          frm_Email_id: from_mailid,
          To_emailID: to_mailid,
          Cc_emailID: cc_mailid = ""
        }

        this.http.post(this.apiUrl.apiUrl + '/api/SendEmail', JSON.stringify(emailParams), { headers: this.Postheaders })
          .map(res => res.json()).subscribe(data => {
          },
            error => {
              console.log(error);
            });

        loader.dismiss();
        this.showPrompt();
        this.department = "";
        this.priority = "";
        this.observation = "";
      },

        error => {
          console.log(error);
        });

  }

  showPrompt() {

    let prompt = this.alert.create({
      title: 'Note',
      message: 'Email Sent Successfully!',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.navCtrl.setRoot(HomePage);
            console.log('Email Sent successfully');
          }
        }]
    });

    prompt.present();
  }

}


