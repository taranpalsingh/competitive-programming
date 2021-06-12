
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'length-converter',
  templateUrl: './lengthConverter.component.html',
  styleUrls: ['./lengthConverter.component.scss']
})
export class LengthConverter implements OnInit {
  num1: number = null;
  num2: number = null;
  unit1Option;
  unit2Option;

  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];

  ngOnInit() {
    this.unit1Changed(0);
    this.unit2Changed(1);
  }

  ngAfterViewInit() {
    this.unit1Changed(0);
    this.unit2Changed(1);

  }
  num1Changed() {
    this.num2 = (this.num1, this.unit1Option.label, this.unit2Option.label);
  }

  num2Changed() {
    this.num1 = (this.num2, this.unit2Option.label, this.unit1Option.label);
  }

  unit1Changed(id) {
    this.unit1Option = this.lengthOptions.find(option => option.id===id);
  }
  
  unit2Changed(id) {
    this.unit2Option = this.lengthOptions.find(option => option.id===id);
  }
  
  lengthConverter(num, masterUnit, slaveUnit) {
    debugger
    switch(masterUnit) {
      case 'Kilometre':
        debugger
        if(slaveUnit === 'Metre') 
          return num*1000;
        else if(slaveUnit === 'Centimetre') 
          return num*1000*100;
        
      case 'Metre':
        debugger
        if(slaveUnit === 'Kilometre') 
          return num/1000;
        else if(slaveUnit === 'Centimetre') 
          return num*100;
        
      case 'Centimetre':
        debugger
        if(slaveUnit === 'Kilometre') 
          return (num/1000)/100;
        else if(slaveUnit === 'Metre') 
          return num/100;
      default: 
        debugger
        console.log("inside default");
    }
  }
}
