
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrl: './weather-search.component.scss'
})
export class WeatherSearchComponent {
  city: string = '';

  constructor(private weatherService: WeatherService) {}

  searchWeather():void {
    console.log(this.city);

    this.weatherService.getWeather(this.city).subscribe(data => {
      console.log(data);
    });
  }
}
