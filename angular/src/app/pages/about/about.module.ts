import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AppRoutingModule } from './../../app-routing.module';

import { HeaderModule } from './../../shared/header/header.module';
import { FooterModule } from './../../shared/footer/footer.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class AboutModule { }
