import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

const httpOptions = {           //front end headers need to talk to back end headers. How front end talks to back end
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: 'Bearer ZSxnG9nSDL4ri_0IouhHnO9yNnBSivVABa10ibZZlgy8XTsKW3Mz3Zcx95Tf677jg_0Xrx4g_4QKf7oGvGonq85fASHCcR-PoT8nZhLJGGnlpHBsoo0ENcp00R7kXHYx',

  })
};



@Injectable({
  providedIn: 'root'
})


export class YelpserviceService {
  baseUrl = 'http://localhost:3000/mastercontroller/'

  constructor(private http: HttpClient) { }                   // required to pull information from server

  getrestaurant(city, state, pricingInfo) : Observable<any> { // inputs that will be in component
    return this.http.get<any>(                                // 
      this.baseUrl+`${city}/${state}/${pricingInfo}`          // creates the url based on the inputs 
    );
  }
}
