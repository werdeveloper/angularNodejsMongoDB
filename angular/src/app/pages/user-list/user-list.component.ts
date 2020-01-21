import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { ToastrMessageService } from '../../services/toastr-message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ToastrMessageService]
})
export class UserListComponent implements OnInit {
  constructor( 
    private http: HttpClient, 
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router:Router,
    private _toastrMessageService: ToastrMessageService,
    private confirmationDialogService: ConfirmationDialogService
    ) { }

  allUser;
  ngOnInit() {
    // debugger;
    this.getAllUsers();
  }

  getAllUsers() {
    return this.httpService.get('/users/getUsers')
      .subscribe(
          (data: { status: number, response: string, data: Array<any> }) => { 
            this.allUser = data.data; 
            //console.log(data);
            if (this.allUser.status === 1) {
              console.log('get all users list on user list page', this.allUser);        
            }
          },
          (error) => {
            console.log(error);
            if(error.status == 401){
              this._toastrMessageService.typeError('Unauthorized User');
              this.router.navigate(['/']);
            }            
          }
        );
  }

  public openConfirmationDialog(userId) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to delete?')
    .then((confirmed) => 
        //console.log('User confirmed:', confirmed)
        this.deleteUser(userId)
      ).catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  deleteUser(userId){
    console.log("User Record delete confirmation for user Id -", userId);
    return this.httpService.delete('/users/deleteUser', userId)
      .subscribe(
        (data: { status: number, response: string, data: Array<any> }) => {
          console.log(data);
          if (data.status === 1 && (data.data.length > 0)) {
            this._toastrMessageService.typeSuccess('User record deleted successfully');
            //Reload the page
          } else {
            this._toastrMessageService.typeError('User record not deleted successfully');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
