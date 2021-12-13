import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather!: Weather;
  city!: string;
  date!: Date;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  search(city: string){
    this.weatherService.getWeather(city).subscribe(response => this.weather = response)
    this.date = new Date;
  }


}
