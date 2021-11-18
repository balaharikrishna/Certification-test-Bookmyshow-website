import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiserviceService {

  constructor(private httpclient:HttpClient) {}
  //movie get:
  getMovies(){
    return this.httpclient.get<any>("https://localhost:44398/api/SelectAllMovies")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //movie add/post:
  addmovies(moviebody:any):Observable<any>{
    const movieurl = 'https://localhost:44398/api/AddMovie';
    return this.httpclient.post<any>(movieurl,moviebody);
  }
  //movie put/update:
  updatemovies(moviebody:any):Observable<any>{
    const movieurl = 'https://localhost:44398/api/UpdateMovie';
    return this.httpclient.put<any>(movieurl,moviebody);
  }
  //movie delete: 
  deletemovies(moviebody:any) : Observable<any>{
    const movieurl = 'https://localhost:44398/api/DeleteMovie';
    return this.httpclient.delete<any>(movieurl,moviebody);
  }

  getSeats(){
    return this.httpclient.get<any>("https://localhost:44398/api/SelectAllSeats")
    .pipe(map((res:any)=>{
      return res;
    }))
  }




  // deleteMovie(val:any): Observable<any>
  // {
  //   return this.http.delete(this.APIUrl+'api/movies/delete-movie?id='+val);
  // }

   

}
