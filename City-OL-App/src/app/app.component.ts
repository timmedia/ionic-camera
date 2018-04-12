import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { SlidesPage } from '../pages/slides/slides';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;

  menuItems: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyA1-NMxTS3PMrO2PASZUuz-wHWvxDMi6tk",
      authDomain: "city-ol-brugg.firebaseapp.com",
      databaseURL: "https://city-ol-brugg.firebaseio.com",
      projectId: "city-ol-brugg",
      storageBucket: "city-ol-brugg.appspot.com",
      messagingSenderId: "718093798294"
    });
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.menuItems = [
      { title: 'Dein Profil', component: ProfilePage },
      { title: 'Über den City-OL', component: AboutPage },
      { title: 'Slides test', component: SlidesPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
