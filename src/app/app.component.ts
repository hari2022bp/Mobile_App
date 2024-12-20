import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  rootPage:any = 'LoginPage';
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  @ViewChild('nav') nav: NavController;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private menu: MenuController, public events: Events, private idle: Idle, private keepalive: Keepalive) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
   
   
    });
    

    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(300);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(1);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');

    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
     
      this.nav.setRoot('LoginPage');
      localStorage.clear();
      this.menu.close();
    });

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }


  initializeApp(){
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menu.close();
  }

  onIATA(){
    this.nav.push('IatacodePage');
  }

  onFlightRadar(){
    this.nav.push('FlightradarPage');
  }

  onICAODocs(){
    this.nav.push('IcaoPage');
  }

  onNotam(){
    this.nav.push('NotamPage');
  }

  onEAIP(){
    this.nav.push('EaipPage');
  }

  onAERGM(){
    this.nav.push('AergmPage');
  }

  onMETAR(){
    this.nav.push('MetarPage');
  }

  onACI(){
    this.nav.push('AciPage');
  }

  onDGCA(){
    this.nav.push('DgcaPage');
  }

  onAdverseWeatherChecklist(){
    this.nav.push('AdverseweatherPage');
  }

  onBreatheUndertaking(){
    this.nav.push('BreatheanalyserPage');
  }

  onLogout(){
    localStorage.clear();
    this.nav.setRoot('LoginPage');
    this.menu.close();
  }

}

