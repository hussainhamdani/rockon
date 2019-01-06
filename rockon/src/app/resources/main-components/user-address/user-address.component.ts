import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SUser } from '../../../services/user-store';
import { RStoreService } from '../../../services/r-store';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  unitNumber = new FormControl();
  street = new FormControl();
  city = new FormControl();
  postalCode = new FormControl();
  country = new FormControl();
  form = new FormGroup({
    unitNumber : this.unitNumber,
    street : this.street,
    city : this.city,
    postalCode : this.postalCode,
    country : this.country
  })

  private rStore;
  
  constructor(private Router: Router, private userStore: RStoreService, private userData: SUser) {
    this.rStore = userStore.setStoreInetial(userData)
    this.rStore.getStoreDateService().subscribe( data => {
      console.log(data);
    })
  }
  
  goToReview() {
    this.Router.navigate(['/review-details']);
  }

  ngOnInit() {
  }

}
