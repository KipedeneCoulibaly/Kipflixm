import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  
  public bannerList: any=[]
  public moviesList: any=[];
  public imgPath: string = "https://image.tmdb.org/t/p/original/";
  public errorMessage!: string;

  constructor(private moviesService:MoviesService, private http:HttpClient){}
  
  ngOnInit(): void {
    this.handleGetBannerData();
  }

  public handleGetBannerData(){
    this.moviesService.getBanner().subscribe({
      next: (res) => {
        console.log(res);
        this.bannerList = res.results;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }
}
