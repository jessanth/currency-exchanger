import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyExchangerService } from 'src/app/Services/currency-exchanger.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit, OnChanges {
  @Input() currency: string = "USD";
  @Output() dataEmitter = new EventEmitter();
  @Input() disable: boolean = false;
  @Input() amount: number = 0;
  @Input() from: string = "";
  @Input() hideMore: boolean = false;

  form!: FormGroup;
  countries: any = [];
  oneUSDValue: number = 0;
  convertedUSDValue: number = 0;
  constructor(private currencyExchangerService: CurrencyExchangerService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      amount: new FormControl(this.amount, [Validators.required]),
      'from': new FormControl(this.from, [Validators.required]),
      'to': new FormControl(this.currency, [Validators.required])
    });
    this.convert();

  }

  ngOnChanges() {
    this.initForm();
  }

  convert() {
    this.currencyExchangerService.convert().subscribe(res => {
      if (res && res.rates) {
        this.countries = Object.keys(res.rates);
        this.oneUSDValue = 1 * res.rates[this.currency]
        this.convertedUSDValue = this.form.get('amount')?.value * res.rates[this.currency];
        let obj = {
          enteredValue: 25,
          resData: res.rates
        }
        this.dataEmitter.emit(obj);
      }
    })
  }



  onSwap() {
    if (!this.disable) {
      const from = this.form.get('from')?.value;
      const to = this.form.get('to')?.value;
      this.form.get('from')?.patchValue(to);
      this.form.get('to')?.patchValue(from);
      this.form.updateValueAndValidity();
    }

  }

  moreDetails() {
    if (this.form.get('amount')?.value) {
      this.currencyExchangerService.detailsData = {
        amount: this.form.get('amount')?.value,
        from: this.form.get('from')?.value
      }
      this.router.navigateByUrl(`/details-page/${this.form.get('to')?.value}?from=${this.form.get('from')?.value}&amount=${this.form.get('amount')?.value}`)
    } else {
      alert('Please enter amount')
    }

  }

}
