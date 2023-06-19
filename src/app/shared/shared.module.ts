import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './components/converter/converter.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './directive/only-number.directive';



@NgModule({
  declarations: [ConverterComponent, NumberDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ConverterComponent, NumberDirective, HttpClientModule]
})
export class SharedModule { }
