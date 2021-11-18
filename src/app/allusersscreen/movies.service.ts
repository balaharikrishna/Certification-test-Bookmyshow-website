import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  ApiUrl = "https://localhost:44398/";

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any[]>
  {
    console.log(this.http.get<any[]>(this.ApiUrl+'api/SelectUsersScreen/1'))
    return  this.http.get<any[]>(this.ApiUrl+'api/SelectUsersScreen/1');
    
  }

  getAllMoviesTwo(): Observable<any[]>
  {
    console.log(this.http.get<any[]>(this.ApiUrl+'api/SelectUsersScreen/2'))
    return  this.http.get<any[]>(this.ApiUrl+'api/SelectUsersScreen/2');
    
  }

 
  
}
