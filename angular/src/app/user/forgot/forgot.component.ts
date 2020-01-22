import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { ToastrMessageService } from '../../services/toastr-message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
  providers: [ToastrMessageService]
})
export class ForgotComponent implements OnInit {

  forgotForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private _toastrMessageService: ToastrMessageService
  ) {}

  // On Page load
  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.forgotForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotForm.invalid) {
      return;
    }
    // for create
    const userPostDatas = {
      email: this.forgotForm.value.email
    };
    // console.log(userPostDatas);
    this.forgotPassword(userPostDatas);
  }

  onReset() {
    this.submitted = false;
    this.forgotForm.reset();
  }

  forgotPassword(userPostDatas) {
    /* return this.httpService.post('/users/passwordForgot/', userPostDatas)
      .subscribe(
        (data: { status: number, response: string, data: Array<any> }) => {
          console.log(data);
          if (data.status === 1 && (data.data.length > 0)) {
            console.log('Get created user data on user create page', data.data);
            this._toastrMessageService.typeSuccess('User created successfully');
            this.onReset(); // for reset the form
          } else {
            this._toastrMessageService.typeError('User not created successfully');
          }
        },
        (error) => {
          console.log(error);
        }
      ); */
  }
}
