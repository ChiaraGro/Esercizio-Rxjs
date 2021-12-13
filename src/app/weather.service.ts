import { environment } from './../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather>{
    const params = new HttpParams()
    .set('q', city)
    .set('appid', '5a23354bd4bdff2b23ee8bc457577ebd')
    .set('unit', 'metric')

    return this.http.get<Weather>(environment.apiUrl, {params});
  }
}
