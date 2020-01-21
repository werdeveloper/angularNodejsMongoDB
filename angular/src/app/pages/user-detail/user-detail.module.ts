import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    //FormsModule,
    //ReactiveFormsModule
  ]
})
export class UserDetailModule { } 
