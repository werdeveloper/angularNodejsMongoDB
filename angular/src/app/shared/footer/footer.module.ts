import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../../app/app-routing.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }