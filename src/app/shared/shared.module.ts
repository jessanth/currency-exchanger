import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './components/converter/converter.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ConverterComponent]
})
export class SharedModule { }
