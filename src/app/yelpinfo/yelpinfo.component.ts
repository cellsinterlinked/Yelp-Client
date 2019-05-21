import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { YelpserviceService } from '../yelpservice.service';

@Component({
  selector: 'app-yelpinfo',
  templateUrl: './yelpinfo.component.html',
  styleUrls: ['./yelpinfo.component.css'],
})
export class YelpinfoComponent implements OnInit {

  ratings = ['🌟','🌟', '🌟🌟', '🌟🌟', '🌟🌟🌟', '🌟🌟🌟', '🌟🌟🌟🌟', '🌟🌟🌟🌟', '🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟']
  city = new FormControl('');
  state = new FormControl('');
  priceInfo = new FormControl('');
  
  constructor(private yelpService : YelpserviceService, private fb: FormBuilder) { };

  restaurantForm: FormGroup;
  
  restaurantdata: any;
  randominfo: any;
  foodInfo: any;

  ngOnInit() {
    
    this.restaurantForm = this.fb.group({
      city: new FormControl(),
      state: new FormControl(),
      priceInfo: new FormControl(),
    })
  }

  onSubmit(){
    this.yelpService.getrestaurant(
      this.restaurantForm.value.city, 
      this.restaurantForm.value.state,
      this.restaurantForm.value.priceInfo).subscribe(data => {
        console.log(data);
        this.restaurantdata = data.businesses;
        this.randominfo = this.restaurantdata[Math.floor(Math.random() * this.restaurantdata.length)];
        
        console.log(this.randominfo);
        if (this.randominfo.is_closed === false) {
          this.randominfo = this.restaurantdata[Math.floor(Math.random() * this.restaurantdata.length)];
          this.randominfo.rating = this.ratings[this.randominfo.rating]
        } else (this.randominfo = this.restaurantdata[Math.floor(Math.random() * this.restaurantdata.length)])
      });
       
  }
}
