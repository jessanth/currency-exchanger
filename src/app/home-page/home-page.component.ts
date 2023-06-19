import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  enteredValue: number = 0;
  rates: any = {};
  popularCurrencies = [
    'AED',
    'AUD',
    'CAD',
    'GBP',
    'INR',
    'JPY',
    'KWD',
    'USD',
    'QAR'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  emittedData(event: any) {
    this.enteredValue = event.enteredValue;
    this.rates = event.resData;
  }

}
