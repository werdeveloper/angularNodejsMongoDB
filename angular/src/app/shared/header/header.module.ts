import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../../app/app-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
