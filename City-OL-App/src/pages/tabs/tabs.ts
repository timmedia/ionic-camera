import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MapsPage } from '../maps/maps';
import { DataPage } from '../data/data';
import { ScanPage } from '../scan/scan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ScanPage;
  tab3Root = MapsPage;
  tab4Root = DataPage;

  constructor() {}
}
