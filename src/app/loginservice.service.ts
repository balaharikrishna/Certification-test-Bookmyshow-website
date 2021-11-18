import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public httpclient:HttpClient) {}
  
  adduserlogin(userbody: any) : Observable<User>{
      
    const userurl = 'https://localhost:44398/api/AddUser';
    return this.httpclient.post<User>(userurl,userbody);

  }

  adminlogin() : Observable<any>{
      
    const userurl = 'https://localhost:44398/api/SelectAd';
    return this.httpclient.get<any>(userurl);

  }
}
