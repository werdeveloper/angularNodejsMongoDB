import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// enviornment for Nodejs API
import { environment } from '../../environments/environment';
// Call Nodejs API using rxjs
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {
  private serverBase: string;

  constructor(private http: HttpClient) {
    this.serverBase = environment.serverBase;
  }

  get(url): Observable<any> {
    const apiEndpoint = `${this.serverBase}${url}`;
    console.log(`GET Reaching endpoint: ${apiEndpoint}`);
    try {
      return this.http.get(this.serverBase + url, {});
    } catch (error) {
      console.log(error);
    }
  }

  post(url: string, data: any): Observable<any> {
    const apiEndpoint = `${this.serverBase}${url}`;
    console.log(`POST Reaching endpoint: ${apiEndpoint}`);
    try {
      return this.http.post(apiEndpoint, data, {});
    } catch (error) {
      console.log(error);
    }
  }

  put(url: string, data: any): Observable<any> {
    const apiEndpoint = `${this.serverBase}${url}`;
    console.log(`PUT Reaching endpoint: ${apiEndpoint}`);
    try {
      return this.http.put(apiEndpoint, data, {});
    } catch (error) {
      console.log(error);
    }
  }

  delete(url: string, id: any): Observable<any> {
    const apiEndpoint = `${this.serverBase}${url}`;
    console.log(`Delete Reaching endpoint: ${apiEndpoint}`);
    const options = {
      // headers: headers
    };
    try {
      return this.http.delete(apiEndpoint + '/' + id, options);
    } catch (error) {
      console.log(error);
    }
  }
}
