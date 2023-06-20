import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangerService {
  detailsData: any = {};
  constructor(private http: HttpClient) { }

  convert(from: string, to: string): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=${environment.apiKey}&base=${from}`)
  }

  historicalRates(year: string, month: string, form: string, to: string): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/${year}-${month}-01?access_key=${environment.apiKey}&base=${form}&symbols=${to}`)
  }
}
