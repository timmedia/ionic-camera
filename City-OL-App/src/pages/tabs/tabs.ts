import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MapsPage } from '../maps/maps';
import { DataPage } from '../data/data';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapsPage;
  tab3Root = DataPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
