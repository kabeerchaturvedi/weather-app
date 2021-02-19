import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherupdateService {
  static YOUR_ACCESS_KEY = '44fb3a3f80bb610184ba9388bae0451d';
  constructor(private http: HttpClient) { }
  getWeather(location) {

    return this.http.get('http://api.weatherstack.com/current?access_key=44fb3a3f80bb610184ba9388bae0451d&query=' + location);



  }
}
