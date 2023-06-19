import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import * as moment from 'moment';
import { BaseChartDirective } from 'ng2-charts';
import { CurrencyExchangerService } from '../Services/currency-exchanger.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  providers: [CurrencyExchangerService]

})
export class DetailsPageComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  pageName: string = "";
  historicalRatesLables: any = [];
  historicalRates: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currencyExchangerService: CurrencyExchangerService) {
    this.router.events.subscribe((val) => {

    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.pageName = params['page-name'];
      this.historicalRatesLables = []
      this.historicalRates = [];
      let now = new Date();
      for (let i = 0; i <= 11; i++) {
        var date = moment(`${now.getMonth()}-1-${now.getFullYear()}`, "MM-DD-YYYY").subtract(i, 'months')
        this.getHistoricalRates(date.format('YYYY'), date.format('MM'));
      }
    })

  }

  getHistoricalRates(year: string, month: string) {
    this.currencyExchangerService.historicalRates(year, month, this.pageName).subscribe(res => {
      if (res) {
        this.historicalRatesLables.push(`${month}/${year}`);
        this.historicalRates.push(res.rates[this.pageName.toLocaleUpperCase()]);
        this.lineChartData.labels = this.historicalRatesLables;
        this.lineChartData.datasets[0].data = this.historicalRates;
        this.chart?.update();
      }

    })
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Rates',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

}
