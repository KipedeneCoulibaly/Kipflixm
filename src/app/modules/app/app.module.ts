import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { MoviesModule } from '../movies/movies.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { apiUrlToken, apiKeyToken, imgPathToken, bannerToken } from './tokens';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AuthModule,
    MoviesModule,
    SharedModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    {provide: apiUrlToken,  useValue: environment.apiUrl},
    {provide: apiKeyToken,  useValue: environment.apiKey},
    {provide: imgPathToken, useValue: environment.imgPath},
    {provide: bannerToken,  useValue: environment.banner},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
