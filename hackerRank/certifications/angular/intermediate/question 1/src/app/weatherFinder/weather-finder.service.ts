import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class WeatherFinderService {

  url = 'https://jsonmock.hackerrank.com/api/weather';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getWeather(name: string) {

    let params = new HttpParams();
    params = params.set('name', name)

    return this.httpClient.get<ApiResponse>(
      this.url, {
        params: params
      }
    )
  }
}
