
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {
  city: string = '';

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      console.log(data);
    });
  }
}
