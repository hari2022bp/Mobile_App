import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

/*
  Generated class for the ApiServiceApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiService {


  //apiUrl ="https://asmaapi.adaniairports.com"//"https://cdp.adaniairports.com"//"https://10.81.248.240"// "https://asmaapi.adani.com" // Live--> http://10.65.127.8:1337 Test -- http://localhost:5155
  apiUrl ="http://localhost:5155"
   //apiUrl ="https://asmaapi-uat.adani.com"
  //apiUrl ="https://asmaamdapi.adani.com"
  tokken:string="";
  headers:HttpHeaders= new HttpHeaders();
  Old_headers:Headers= new Headers();
  

  constructor() {
  //  this.Old_headers.append("Content-Type", "application/json");   
   // this.headers.set("Content-Type", "application/json");

    console.log("Inside api service url")
    console.log("locla storage")
    //console.log(JSON.stringify(localStorage));
//  if(typeof localStorage.getItem("tokken")!=typeof undefined && localStorage.getItem("tokken")!=null)
//  {
//   this.tokken=localStorage.getItem("tokken");
//     this.Old_headers.append("Authorization","Basic "+this.tokken);
//     this.headers.append("Authorization","Basic "+this.tokken);

     console.log("header con")
     console.log(JSON.stringify(this.headers));


//     console.log("Post header")
//     console.log(JSON.stringify(this.Old_headers));


//  }
    
}

 setAuthkeyHeader(key:string){
   //console.log("key param insaide method"+key);
   this.tokken=key;
   //console.log("tokken inside method" +JSON.stringify(this.tokken) );
   this.Old_headers.append("Content-Type", "application/json"); 
   this.Old_headers.append("Authorization","Basic "+this.tokken);
   this.headers = this.headers.set("Authorization","Basic "+this.tokken).set("Content-Type","application/json");
 }


ngOnInit(){
  console.log(" On init  Inside api service url")
}

  
  //this.Old_headers.append("Authorization","Basic "+this.tokken);
  //this.Old_headers.append("Content-Type", "application/json");
  
  

}
