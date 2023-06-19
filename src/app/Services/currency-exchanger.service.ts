import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangerService {
  detailsData: any = {};
  constructor(private http: HttpClient) { }

  convert(): Observable<any> {
    return this.http.get('http://data.fixer.io/api/latest?access_key=11fb3bbac0f0be2f88ca4cf21557d869')
  }

  historicalRates(year: string, month: string, form: string, to: string): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/${year}-${month}-01?access_key=11fb3bbac0f0be2f88ca4cf21557d869&base==${form}&symbols=${to}`)
  }
}
