import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class HomePageModule { }
