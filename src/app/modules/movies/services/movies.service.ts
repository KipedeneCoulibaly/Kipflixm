import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { apiKeyToken, apiUrlToken, bannerToken, imgPathToken } from '../../app/tokens';

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements OnInit{

  constructor(private http: HttpClient, 
              @Inject(apiUrlToken) private apiUrl:string,
              @Inject(apiKeyToken) private apiKey:string,
              @Inject(imgPathToken) private imgPath:string,
              @Inject(bannerToken) private banner:string,) {}

  ngOnInit(): void {
  }

  getBanner(): Observable<any>{
    return this.http.get(this.apiUrl+this.banner+this.apiKey);
  }
}
