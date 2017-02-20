import { Component } from '@angular/core';
import { CalcsService } from '../calcs.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calcs:any[];
  constructor(private _calcsService: CalcsService) {
    this.displayCalcs();
  }
  displayCalcs(){
    this._calcsService.getCalcs().subscribe(calcs => {
      this.calcs = calcs;
      console.log(calcs);
    },
    error => console.log(error));
  }

}