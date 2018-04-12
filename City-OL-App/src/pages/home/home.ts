import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string = 'Start';
  location: string;
  name: string = 'Tim';
  weather: any;
  temperature: any;

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter() {
    this.weatherProvider.getWeather().subscribe(weather => {
      this.weather = weather;
      this.temperature = Math.round((weather.list[0].main.temp - 273.15) * 10) / 10;
      this.location = weather.city.name;
      console.log(weather);
    }); 
  }

}
