import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { MapsPageModule } from '../pages/maps/maps.module';
import { DataPageModule } from '../pages/data/data.module';
import { ScanPageModule } from '../pages/scan/scan.module';
import { AboutPageModule } from '../pages/about/about.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { SlidesPageModule } from '../pages/slides/slides.module';
import { LoginPageModule } from '../pages/login/login.module';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyA1-NMxTS3PMrO2PASZUuz-wHWvxDMi6tk",
  authDomain: "city-ol-brugg.firebaseapp.com",
  databaseURL: "https://city-ol-brugg.firebaseio.com",
  projectId: "city-ol-brugg",
  storageBucket: "city-ol-brugg.appspot.com",
  messagingSenderId: "718093798294"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AboutPageModule,
    SettingsPageModule,
    MapsPageModule,
    DataPageModule,
    ScanPageModule,
    ProfilePageModule,
    SlidesPageModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Zurück',
      menuType: 'overlay'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
