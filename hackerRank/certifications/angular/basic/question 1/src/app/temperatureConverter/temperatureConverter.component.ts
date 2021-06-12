import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  celsius: string = '';
  fahrenheit: string = '';

  change(value: string, type: string) {
    if(type === 'c') {
      this.fahrenheit = '' + ((Number(this.celsius) * (9/5)) + 32).toFixed(1);
    } else {
      this.celsius = '' + ((Number(this.fahrenheit) - 32) * (5/9)).toFixed(1);
    }
  }
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

}