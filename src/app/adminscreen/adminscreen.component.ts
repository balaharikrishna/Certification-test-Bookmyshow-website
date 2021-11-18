import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebapiserviceService } from '../webapiservice.service';

@Component({
  selector: 'app-adminscreen',
  templateUrl: './adminscreen.component.html',
  styleUrls: ['./adminscreen.component.css']
})
export class AdminscreenComponent implements OnInit {
  MoviesList: any=[];
  constructor(public webapi:WebapiserviceService) { }

  ngOnInit(): void {
    this.webapi.getMovies().subscribe(res=>
      this.MoviesList = res.Data);
      // this._http.getRequest().subscribe(res=>this.requests=res);
  }

  // loginuser(userloginform:NgForm){
  //   console.log(userloginform,"logindetails")
  //   let newuser={
  //     UserEmail : userloginform.value.email,
  //     UserPassword: userloginform.value.password
  //   }
  //   console.log(newuser,"logindetails")
  //   this.loginservice.adduserlogin(newuser).subscribe(data => {console.log(data);});
  // }
  // (MovieId int identity(1,1), MovieName varchar(8000), ImageUrl varchar(8000), ScreenId int );
  moviedetails(moviedetailsform:NgForm){
    console.log(moviedetailsform,"addmoviedetails")
    let addmovie={
      MovieId : moviedetailsform.value.MovieId,
      MovieName : moviedetailsform.value.MovieName,
      ImageUrl : moviedetailsform.value.ImageUrl,
      ScreenId : moviedetailsform.value.ScreenId,
    }
    console.log(addmovie,"logindetails")
    this.webapi.addmovies(addmovie).subscribe(data => {console.log(data);});
  }

  // moviedelete(moviedeleteform:NgForm){
  //   console.log(moviedeleteform,"deletemoviedetails")
  //   let deletemovie={
  //     MovieId : moviedeleteform.value.MovieId
  //   }
  //   console.log(deletemovie,"deletemoviedetails")
  //   this.webapi.deletemovies(moviedeleteform.value.MovieId).subscribe((data:any) => {console.log(data)});
  // }
  //deletemovie:
  //  moviedelete(moviedeleteform:NgForm){
  //   console.log(moviedeleteform,"deletemoviedetails")
  //   var val = {"MovieId":moviedeleteform.value.MovieId}
   
  //   this.webapi.deletemovies(moviedeleteform.value.MovieId).subscribe((data:any) => {console.log(data)});
  // }

  moviedelete(moviedeleteform:NgForm){
    console.log(moviedeleteform,"deletemovie")
    let deletemovie={
      MovieId :moviedeleteform.value.MovieId,
    }
   
    this.webapi.deletemovies(deletemovie).subscribe((data:any) => {console.log(data)});
  }
// updatemovie:
  movieupdate(movieupdateform:NgForm){
    console.log(movieupdateform,"movieupdate")
    let updatemovie={
      MovieId : movieupdateform.value.MovieId,
      MovieName : movieupdateform.value.MovieName,
      ImageUrl : movieupdateform.value.ImageUrl,
      ScreenId : movieupdateform.value.ScreenId,
    }
   
    this.webapi.updatemovies(updatemovie).subscribe((data:any) => {console.log(data)});
  }

 

  // addMovie(sign: NgForm){
  //   var val = {"movieId":sign.value.movieId, "movieName":sign.value.movieName, "movieUrl":sign.value.movieUrl};
  //   this.service.deleteMovie(sign.value.movieId).subscribe((data:any) => {
  //     alert("The Movie Has Been Deleted Successfully");
  //   });
  // }


}
