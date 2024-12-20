import { Component, OnInit, trigger, state, style, transition, animate, keyframes,ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, IonicPage } from 'ionic-angular';
import { NgForm, FormGroup, Validators, FormControl } from "@angular/forms";
import { Http, Headers, RequestOptions } from '@angular/http';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { ApiService } from '../../api/api-service';
import { HttpHeaders } from '@angular/common/http';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [DatePipe],
  animations: [
    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),

    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ]),

    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),

    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
})

export class LoginPage implements AfterViewInit {

  LoginData: any;
  setDob: string;
  loginForm: FormGroup;
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";



  @ViewChild('myCanvas') myCanvas: ElementRef;

  private context: CanvasRenderingContext2D;
  private Captchacode:string="";
  public code:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController,
              public alert: AlertController, public datePipe:DatePipe, public http: Http, public storage: Storage, private apiUrl:ApiService) {

                localStorage.clear();
            var date = new Date();
            this.setDob = datePipe.transform( date, 'dd-MM-yyyy' );

  }

  ngOnInit(){
    this.initializeForm();
  }

  ngAfterViewInit(){
    this.context = (
      this.myCanvas.nativeElement as HTMLCanvasElement
    ).getContext('2d');

    this.draw();
  }


  private initializeForm(){
    this.loginForm = new FormGroup({
      'EMP_ID': new FormControl('', Validators.required),
      'uM_PASSWORD': new FormControl('', Validators.required),
      'code':new FormControl('', Validators.required)
    });
  }

  login(){
    let IsLogged=false;

    const value = this.loginForm.value;
    this.code=value.code;
    console.log("Cc_" +this.Captchacode+"_cd")
    console.log("d_" +this.code+"_cd")
    if(this.Captchacode.toLowerCase()==this.code.toLowerCase())
    {

      const loading = this.loading.create({
        content: 'Logging In, Please Wait!'
      });
  
      loading.present();
  
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      
  
     // const value = this.loginForm.value;
  
      let postParams = {
        EMP_ID: value.EMP_ID,
        uM_PASSWORD: value.uM_PASSWORD
      }
  
       this.http.post(this.apiUrl.apiUrl + '/api/Login', JSON.stringify(postParams), {headers:headers})
        .map(res => res.json()).subscribe( data=> {
          console.log("success");
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(data.length));
          this.LoginData = data.data;
          this.saveLoginDataForOfflineUse();
          if(data.length != 0 && data.data.length != 0)
          {
            console.log("With data")
            console.log(JSON.stringify(data.data))
            console.log("With data  1")
            console.log(JSON.stringify(data.data[0]))

              // localStorage.setItem("guestid", data.data[0].UM_I);
              // localStorage.setItem("username", data.data[0].UM_FIRST_NAME + ' ' + data.data[0].UM_LAST_NAME);
              // localStorage.setItem("email", data.data[0].EMAIL_ID);
              // localStorage.setItem("empcode",data.data[0].EmployeeID);
              
              let tokkenkey=data.Key;
              
              //console.log("data key" + data.Key);
              //console.log("key " +tokkenkey);
              this.apiUrl.tokken=tokkenkey+"";
              


              //console.log("tokken" + this.apiUrl.tokken);
              localStorage.setItem("tokken",data.Key);
              this.apiUrl.setAuthkeyHeader(data.Key);
              console.log("headers"); 
              // let headers = new HttpHeaders({"content-type":"application/json"})
              // headers.set('content-type', 'application/json')
              // headers.set('Access-Control-Allow-Origin', '*')
             // console.log( JSON.stringify(this.apiUrl.headers) ); 

             

              //this.apiUrl.Old_headers.append("Authorization","Basic "+tokkenkey);
              //this.apiUrl.headers.set("Authorization","Basic "+tokkenkey);
   
              
              console.log( JSON.stringify(this.apiUrl.headers.get('Authorization')));
              //console.log( JSON.stringify(this.apiUrl.headers.get('Content-Type')));
              //console.log(JSON.stringify(this.apiUrl.Old_headers));

              // this.navCtrl.setRoot('HomePage');
               loading.dismiss();

              this.http
              .post(this.apiUrl.apiUrl +"/api/Login/GetUserMaster", JSON.stringify({
                key:tokkenkey
              }), {
                headers: headers,
              }).subscribe((data1:any)=>{

                console.log(data1._body);

                let myArray = data1._body.split(":");
          
          
                console.log(myArray[0]  +  "   0");
                console.log(myArray[1] +  "   1");
                
                let actauth=myArray[1];
                actauth=actauth.replace("}","");
                
                
                console.log(actauth);
                IsLogged=(actauth=="true")?true:false;
                if(IsLogged==true){
                  console.log( "IsLogged" )
                  console.log( IsLogged )
                  localStorage.setItem("guestid", data.data[0].UM_I);
                  localStorage.setItem("username", data.data[0].UM_FIRST_NAME + ' ' + data.data[0].UM_LAST_NAME);
                  localStorage.setItem("email", data.data[0].EMAIL_ID);
                  localStorage.setItem("empcode",data.data[0].EmployeeID);
                 
                  this.navCtrl.setRoot('HomePage');
                 // loading.dismiss(); 
                
                
                }
                else{
                  console.log("Auth failed");
                
                loading.dismiss();
                const alert = this.alert.create({
                  title: 'Login Failed, Checking Offline Connectivity.',
                  buttons: ['OK']
                });
                alert.present();
                //this.getLoginForOfflineUse();
                }

              },
              error => {
                console.log("error");
                console.log(JSON.stringify(error));
                loading.dismiss();
                const alert = this.alert.create({
                  title: 'Login Failed, Checking Offline Connectivity.',
                  buttons: ['OK']
                });
                alert.present();
                this.getLoginForOfflineUse();
              } 
              
              )




          }
          else
          {
            console.log("Without data")
              loading.dismiss();
              const alert = this.alert.create({
              title: 'Login Failed, Checking Offline Connectivity.',
              buttons: ['OK']
              });
              alert.present();
              this.getLoginForOfflineUse();
          }
  
        },
        error => {
          console.log("error");
          console.log(JSON.stringify(error));
          loading.dismiss();
          const alert = this.alert.create({
            title: 'Login Failed, Checking Offline Connectivity.',
            buttons: ['OK']
          });
          alert.present();
          this.getLoginForOfflineUse();
        }
  
        );
  
        this.saveLoginDataForOfflineUse();

    }
    else
    {
      alert("Invalid Captcha");
      this.context.clearRect(0,0,(this.myCanvas.nativeElement as HTMLCanvasElement).width,(this.myCanvas.nativeElement as HTMLCanvasElement).height);
      this.draw();
      this.code="";
    }


    // const loading = this.loading.create({
    //   content: 'Logging In, Please Wait!'
    // });

    // loading.present();

    // let headers = new Headers();
    // headers.append("Content-Type", "application/json");
    // headers.append("Accept", "application/json");

    // const value = this.loginForm.value;

    // let postParams = {
    //   EMP_ID: value.EMP_ID,
    //   uM_PASSWORD: value.uM_PASSWORD
    // }

    //  this.http.post(this.apiUrl.apiUrl + '/api/Login', JSON.stringify(postParams), {headers:headers})
    //   .map(res => res.json()).subscribe( data=> {
    //     console.log("success");
    //     console.log(JSON.stringify(data));
    //     this.LoginData = data;
    //     this.saveLoginDataForOfflineUse();
    //     if(data.length != 0)
    //     {

    //         localStorage.setItem("guestid", data[0].UM_I);
    //         localStorage.setItem("username", data[0].UM_FIRST_NAME + ' ' + data[0].UM_LAST_NAME);
    //         localStorage.setItem("email", data[0].EMAIL_ID);
    //         localStorage.setItem("empcode",data[0].EmployeeID);
    //         this.navCtrl.setRoot('HomePage');
    //         loading.dismiss();
    //     }
    //     else
    //     {
    //         loading.dismiss();
    //         const alert = this.alert.create({
    //         title: 'Login Failed, Checking Offline Connectivity.',
    //         buttons: ['OK']
    //         });
    //         alert.present();
    //         this.getLoginForOfflineUse();
    //     }

    //   },
    //   error => {
    //     console.log("error");
    //     console.log(JSON.stringify(error));
    //     loading.dismiss();
    //     const alert = this.alert.create({
    //       title: 'Login Failed, Checking Offline Connectivity.',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //     this.getLoginForOfflineUse();
    //   }

    //   );

    //   this.saveLoginDataForOfflineUse();


  }


  saveLoginDataForOfflineUse(){
    const value = this.LoginData;

    this.storage.set('LoginInformation', value);

  }

  getLoginForOfflineUse(){
    this.storage.get('LoginInformation').then((val) => {
      
      console.log("inside str")
      
      if(val!=null){

      
      
      localStorage.setItem("guestid", val[0].UM_I);
      //localStorage.setItem("username", val[0].UM_FIRST_NAME);
      localStorage.setItem("username", val[0].UM_FIRST_NAME + ' ' + val[0].UM_LAST_NAME);
      localStorage.setItem("email", val[0].EMAIL_ID);

      this.navCtrl.setRoot('HomePage');
      }
    });
  }

  private draw() {
    // this.context.font = '30px Arial';
    // this.context.textBaseline = 'middle';
    // this.context.textAlign = 'center';

    // const x = (this.myCanvas.nativeElement as HTMLCanvasElement).width / 2;
    // const y = (this.myCanvas.nativeElement as HTMLCanvasElement).height / 2;
    // this.context.fillText('Angular Canvas', x, y);


    let left = 10;

     const CustomLength=5;
    const resourceUpper = ['A','B','C','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'];
    const resourceLower = ['a','b','c','e','f','g','h','j','k','l','m','n','p','q','r','s','t','w','x','y','z'];
    const resourceNumber = ['0','1','2','3','4','5','6','7','8','9'];
    const  resourceType= 'aA0';
    let resource = [];
    let resourceExtra=[];

    if (resourceType.length > 0) {
      if (resourceType.indexOf('A') !== -1) {
        resource = resource.concat(resourceUpper);
      }
      if (resourceType.indexOf('a') !== -1) {
        resource = resource.concat(resourceLower);
      }
      if (resourceType.indexOf('0') !== -1) {
        resource = resource.concat(resourceNumber);
      }
    }
    if (resourceExtra.length > 0) {
      resource = resource.concat(resourceExtra);
    }
    
    if (resource.length === 0) {
      resource = resourceUpper.concat(resourceLower).concat(resourceNumber)
    }



    const codes = [];
    const resourceLength = resource.length;
    for (let i = 0; i < CustomLength; i++) {
      const txt = resource[Math.floor(Math.random() * resourceLength)];
      codes.push(txt);
    }

    const spaceWidth = (this.myCanvas.nativeElement as HTMLCanvasElement).width - this.context.measureText(codes.join('')).width - 60;
    const wordSpace = Math.floor(spaceWidth / codes.length);

    for (let i = 0; i < codes.length; i++) {
      const deg = Math.random() * 30 * Math.PI / 180;     
      const x = left;                                     
      const y = (this.myCanvas.nativeElement as HTMLCanvasElement).height / 2 + Math.random()*10;    

      this.context.translate(x, y);
      this.context.rotate(deg);

      // const r = Math.round(Math.random() * 255);
      // const g = Math.round(Math.random() * 255);
      // const b = Math.round(Math.random() * 255);
      // const a = Math.random();
      //const Rancolor='rgb(' + r + ',' + g + ',' + b + ',' + a + ')';
      const Rancolor=this.randomColor(false);  //'rgb(' + r + ',' + g + ',' + b + ')';
      //this.context.fillStyle = Rancolor;
      this.context.fillStyle ="white";
      this.context.font = '36px Arial';
      this.context.textAlign = 'center';
      this.context.fillText(codes[i], 0, 0);

      //this.Captchacode+=codes[i];

      this.context.rotate(-deg);
      this.context.translate(-x, -y);

      //left += this.context.measureText(codes[i]).width + wordSpace + Math.floor(Math.random()*5);
      left += this.context.measureText(codes[i]).width + 35 + Math.floor(Math.random()*5);
    }
    this.Captchacode=codes.join('');

    
  }


  private randomColor(alpha) {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    if (!alpha) {
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    const a = Math.random();
    return 'rgb(' + r + ',' + g + ',' + b + ',' + a + ')';
  };




}
