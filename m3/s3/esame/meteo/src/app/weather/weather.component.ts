// weather.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  city = 'Milano';
  apiKey = '008eb00d4c944a65885f243a6f96acd0'



  forecasts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getWeatherForecast();
  }


  getWeatherForecast() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}`;


    this.http.get(apiUrl).subscribe((data: any) => {

      this.forecasts = data.list;
    });
  }
}
