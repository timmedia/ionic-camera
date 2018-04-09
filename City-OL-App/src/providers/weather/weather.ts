import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  key = '8f2739193b7e63e2e75f0ca9207db9ab';
  location = 'Brugg';
  url;

  constructor(public http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + this.location + '&appid=' + this.key
  }

  getWeather() {
    return this.http.get(this.url).map(res => res.json());
  }

}
