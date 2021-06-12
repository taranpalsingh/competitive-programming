import { TestBed } from '@angular/core/testing';

import { WeatherFinderService } from './weather-finder.service';

describe('WeatherFinderService', () => {
  let service: WeatherFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
