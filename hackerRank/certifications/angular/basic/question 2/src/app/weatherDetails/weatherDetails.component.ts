import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  showData: data = null;
  cityName: string = '';
  isCityNameDirty = false;

  ngOnInit() {

  }

  cityNameUpdated(event) {
    this.isCityNameDirty = (this.cityName)? true: false;
    this.showData = this.weatherData.find(data => data.name.toLowerCase() === this.cityName.toLowerCase());
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}