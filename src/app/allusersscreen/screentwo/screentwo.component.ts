import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-screentwo',
  templateUrl: './screentwo.component.html',
  styleUrls: ['./screentwo.component.css']
})
export class ScreentwoComponent implements OnInit {

  moviesList: any= [];   

  constructor(private moviesservices: MoviesService) { }


  ngOnInit(): void {
    this.refreshMovies();
    console.log(localStorage.getItem("movieName"));
  }

  refreshMovies()
  {
    this.moviesservices.getAllMoviesTwo().subscribe((data:any)=>{

        this.moviesList = data['Data'];
        console.log(this.moviesList);
      
    })
  } 



}
