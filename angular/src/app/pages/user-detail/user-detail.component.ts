import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {HttpService} from '../../services/http.service';
import {ToastrMessageService} from '../../services/toastr-message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import { UserModel } from '../../model/userModel';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ToastrMessageService]
})
export class UserDetailComponent implements OnInit {

  getUserDetail: UserModel;   // User Model

  constructor(  
    private http: HttpClient,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router:Router,
    private _toastrMessageService: ToastrMessageService
  ) { }

  ngOnInit(){  
    let id = this.route.snapshot.paramMap.get('id');  // Get the Id from URL
    // console.log(id);  
    this.getUserDetail = new UserModel();   // Create object of User Model
    this.getUserDetails();          
  }

  getUserDetails() {
    let id = this.route.snapshot.paramMap.get('id');  // Get the Id from URL
    return this.httpService.get('/users/getUsers/'+id)
      .subscribe(
          (data: { status: number, response: string, data: Array<any> }) => {
            // console.log(data);
            if (data.status === 1 && (data.data.length > 0) ) {
              this.getUserDetail = data.data[0];                
              console.log('get user data on user detail page', this.getUserDetail);                         
              this._toastrMessageService.typeSuccess('User record get successfully');
            } else{
              this._toastrMessageService.typeError('User record get successfully');
            }
          },
          (error) => {
            console.log(error);             
          }
        );
  }

}
