import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MoviesComponent,
    MoviesDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    HttpClientModule
  ],
  exports: [MoviesDetailsComponent]
})
export class MoviesModule { }
