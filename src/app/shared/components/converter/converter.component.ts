import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrencyExchangerService } from 'src/app/Services/currency-exchanger.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  providers: [CurrencyExchangerService]
})
export class ConverterComponent implements OnInit {
  @Input() currency: string = "usd";
  @Output() dataEmitter = new EventEmitter();
  oneUSDValue: number = 0;
  convertedUSDValue: number = 0;
  constructor(private currencyExchangerService: CurrencyExchangerService) { }

  ngOnInit(): void {

  }

  convert() {
    this.currencyExchangerService.convert().subscribe(res => {
      console.log(res);
      if (res && res.rates) {
        this.oneUSDValue = 1 * res.rates[this.currency]
        this.convertedUSDValue = 25 * res.rates[this.currency];
        let obj = {
          enteredValue: 25,
          resData: res.rates
        }
        this.dataEmitter.emit(obj);
      }
    })
  }

}
