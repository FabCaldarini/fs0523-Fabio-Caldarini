
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '008eb00d4c944a65885f243a6f96acd0';


  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
