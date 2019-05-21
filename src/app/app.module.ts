import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YelpinfoComponent } from './yelpinfo/yelpinfo.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { YelpserviceService } from './yelpservice.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    YelpinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    

  ],
  providers: [
    HttpClient,
    YelpserviceService,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
