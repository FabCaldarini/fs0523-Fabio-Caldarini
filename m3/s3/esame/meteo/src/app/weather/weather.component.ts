// weather.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent  {

  city: string = '';

  constructor(private weatherService: WeatherService) {}

  searchWeather():void {
    console.log(this.city);

    this.weatherService.getWeather(this.city).subscribe(data => {
      console.log(data);
    });
  }
  forecasts: any[] = [];


}
