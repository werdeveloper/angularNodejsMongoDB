import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { ToastrMessageService } from '../../services/toastr-message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../model/userModel';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [ToastrMessageService]
})

export class UserEditComponent implements OnInit {
  getUserDetail: UserModel;  // User Model  
  updateForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router:Router,
    private _toastrMessageService: ToastrMessageService
  ) {
  }

  ngOnInit(){
    let id = this.route.snapshot.paramMap.get('id');  // Get the Id from URL
    // console.log(id);
    this.getUserDetail = new UserModel();   // Create object of User Model
    this.getUserDetails(); 
    this.updateForm = this.formBuilder.group({ 
      name: ['', Validators.required],  
      email: ['', [Validators.required, Validators.email]],  
      phone: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  // Convenience getter for easy access to form fields
  get f() {
    return this.updateForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }
    // for update
    const userId = this.route.snapshot.paramMap.get('id');  // Get the Id from URL
    let userPostDatas = {
      name: this.updateForm.value.name,
      email: this.updateForm.value.email,
      password: this.updateForm.value.password,
      phone: this.updateForm.value.phone,
    };
    // console.log(userPostDatas);
    this.updateUserDetails(userId, userPostDatas);
  }

  getUserDetails() {
    let id = this.route.snapshot.paramMap.get('id');  // Get the Id from URL
    return this.httpService.get('/users/getUsers/' + id)
      .subscribe(
        (data: { status: number, response: string, data: Array<any> }) => {
          // console.log(data);
          if (data.status === 1 && (data.data.length > 0)) {
            this.getUserDetail = data.data[0];
            console.log('get user data on user edit page', this.getUserDetail);
            this._toastrMessageService.typeSuccess('User record get successfully');              
          } else {
            this._toastrMessageService.typeError('User record is not get successfully');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateUserDetails(userId, userPostDatas) {
    return this.httpService.put('/users/updateUser/' + userId, userPostDatas)
      .subscribe(
        (data: { status: number, response: string, data: Array<any> }) => {
          console.log(data);
          if (data.status === 1 && (data.data.length > 0)) {
            this.getUserDetail = data.data[0];
            console.log('Get updated user data on user edit page', this.getUserDetail);
            this._toastrMessageService.typeSuccess('User record updated successfully');
          } else {
            this._toastrMessageService.typeError('User record not upadted successfully');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
