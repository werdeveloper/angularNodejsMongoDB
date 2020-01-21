import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule} from './../../app-routing.module';

import { HeaderModule } from './../../shared/header/header.module';
import { FooterModule } from './../../shared/footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent       
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class HomeModule { }
