// weather-search.component.ts
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
    // Chiamata al servizio per ottenere le previsioni del meteo in base alla città
    this.weatherService.getWeather(this.city).subscribe(data => {
      // Gestisci i risultati ottenuti dal servizio
      console.log(data);
    });
  }
}
