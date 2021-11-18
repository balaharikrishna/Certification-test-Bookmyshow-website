import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-screenone',
  templateUrl: './screenone.component.html',
  styleUrls: ['./screenone.component.css']
})
export class ScreenoneComponent implements OnInit {
  moviesList: any= [];  

  constructor(private moviesservices: MoviesService) { }

  ngOnInit(): void {

    this.refreshMovies();
    console.log(localStorage.getItem("movieName"));  
  }

  refreshMovies()
  {
    this.moviesservices.getAllMovies().subscribe((data:any)=>{

        this.moviesList = data['Data'];
        console.log(this.moviesList);
      
    })
  } 

 


}
