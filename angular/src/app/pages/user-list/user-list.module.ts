import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { AppRoutingModule } from './../../app-routing.module';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';

import { HeaderModule } from './../../shared/header/header.module';
import { SidebarModule } from './../../shared/sidebar/sidebar.module';
import { FooterModule } from './../../shared/footer/footer.module';

@NgModule({
  declarations: [UserListComponent],
  providers:[ConfirmationDialogService],
  imports: [
    AppRoutingModule,
    CommonModule,
    HeaderModule,
    SidebarModule,
    FooterModule
  ]
})
export class UserListModule { }
