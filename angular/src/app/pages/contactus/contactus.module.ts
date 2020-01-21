import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus.component';
import { AppRoutingModule} from './../../app-routing.module';

import { HeaderModule } from './../../shared/header/header.module';
import { SidebarModule } from './../../shared/sidebar/sidebar.module';
import { FooterModule } from './../../shared/footer/footer.module';


@NgModule({
  declarations: [
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    FooterModule
  ]
})
export class ContactusModule { }
