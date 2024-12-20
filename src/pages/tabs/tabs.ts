import { Component } from '@angular/core';

//import { NotamPage } from '../Notam/notam';
import { IatacodePage } from '../iatacode/iatacode';
import { FlightradarPage } from '../flightradar/flightradar';
import { HomePage } from '../home/home';
import { IcaoPage } from '../icao/icao';
import { EaipPage } from '../eaip/eaip';
import { AergmPage } from '../aergm/aergm';
import { MetarPage } from '../metar/metar';
import { AciPage } from '../aci/aci';
import { AdverseweatherPage } from '../adverseweather/adverseweather';
import { BreatheanalyserPage } from '../breatheanalyser/breatheanalyser';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = IatacodePage;
  tab3Root = FlightradarPage;
  //tab4Root = NotamPage;
  tab5Root = IcaoPage;
  tab6Root = EaipPage;
  tab7Root = AergmPage;
  tab8Root = MetarPage;
  tab9Root = AciPage;
  tab10Root = AdverseweatherPage;
  tab11Root = BreatheanalyserPage;

  constructor() {
  }

}
