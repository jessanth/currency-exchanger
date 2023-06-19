import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';
import { DetailsPageRoutingModule } from './details-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    DetailsPageRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class DetailsPageModule { }
