import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { UserCreateComponent } from './user-create.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
      path: '',
      component: UserCreateComponent,
  }
];


@NgModule({
  declarations: [UserCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserCreateModule { 

}
