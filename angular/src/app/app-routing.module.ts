import { NgModule } from '@angular/core';
import { ActivatedRoute , Routes, RouterModule } from '@angular/router';

import {AuthGuardService} from './shared/auth/auth-guard.service';

import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'forgot',
    component: ForgotComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'userlist',
    component: UserListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'userDetail/:id',
    component: UserDetailComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'userEdit/:id',
    component: UserEditComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
];
