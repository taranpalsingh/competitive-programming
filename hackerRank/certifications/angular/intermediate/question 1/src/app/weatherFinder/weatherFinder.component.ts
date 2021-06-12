import {Component, OnInit} from '@angular/core';
import { WeatherFinderService } from './weather-finder.service';

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: 'weather-finder',
  templateUrl: './weatherFinder.component.html',
  styleUrls: ['./weatherFinder.component.scss']
})
export class WeatherFinder implements OnInit {

  cityName: string = '';
  searchResults = false;
  data: CityWeather = null;
  wind: string;
  humidity: string;
  cold: boolean;

  constructor(
    private weatherFinderService: WeatherFinderService,
  ) {}

  ngOnInit(): void {
    
  }

  cityUpdated() {
    this.searchResults = false;
    this.data = null;

    this.weatherFinderService.getWeather(this.cityName)
    .subscribe(res => {
      this.searchResults = true;
      this.data = res.data[0];
      this.data.status.forEach((element) => {
        const values = element.split(" ");

        if(values[0] === 'Wind:') {
          this.wind = values[1];
        }
        else if(values[0] === 'Humidity:') {
          this.humidity = values[1];
        }
      })
      this.cold = (+this.data.weather.split(" ")[0] < 20)? true: false;
    }, err => {
      // console.log(err)
    })
  }
}
