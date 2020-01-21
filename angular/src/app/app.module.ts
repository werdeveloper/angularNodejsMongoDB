// https://startbootstrap.com/themes/sb-admin-2/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TokenInterceptorService} from './services/token-interceptor.service';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './shared/confirmation-dialog/confirmation-dialog.service';
import { FormsModule } from '@angular/forms';

import {AuthService} from './shared/auth/auth.service';
import {AuthGuardService} from './shared/auth/auth-guard.service';


import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';


// pages component
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
// users
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
// pages
import { HomeModule } from './pages/home/home.module';
import { ContactusModule } from './pages/contactus/contactus.module';
import { AboutModule } from './pages/about/about.module';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // ToastrModule required animations module
    NgbModule, ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    ContactusModule,
    AboutModule,
    FormsModule,
    HeaderModule,
    FooterModule
  ],
  providers: [
    HttpService,
    ConfirmationDialogService,
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  }
  ],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
