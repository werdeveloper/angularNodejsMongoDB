import {Component, OnInit,  AfterViewInit, OnDestroy, AfterContentChecked} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { ToastrMessageService } from '../../services/toastr-message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { debug } from 'util';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ToastrMessageService]
})

export class LoginComponent implements OnInit, OnDestroy, AfterContentChecked {
  loginForm: FormGroup;
  submitted = false;

  private loginUserData: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router:Router,
    private _authService: AuthService,
    private _toastrMessageService: ToastrMessageService,
    private auth: AuthService
  ){}

  // On Page load
  ngOnInit() {
    if (this._authService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //
  ngAfterViewInit() {
  }

  //
  ngAfterContentChecked() {
  }

  //destroy
  ngOnDestroy() {
    this._toastrMessageService.clearToast();
}

  // Validation - Convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  // Sumit
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // for create    
    let userPostDatas = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    console.log(userPostDatas); 
    this.loginUser(userPostDatas); 
  }

  loginUser(userPostDatas) {
    // debugger;
    return this.httpService.post('/users/login/', userPostDatas)
      .subscribe(
        (data: { status: number, response: string, data: Array<any> }) => {
          console.log(data); 
          this.loginUserData = data;
          // debugger;
          if (this.loginUserData.status === 1) {
            //save the token data in local storage
            localStorage.token = this.loginUserData.data.token;
            this._toastrMessageService.typeSuccess(this.loginUserData.msg);
            //redirect to other component 
            this.router.navigate(['userlist']);
          }
          else { 
            this._toastrMessageService.typeError("Something went wrong");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}

