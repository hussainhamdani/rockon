import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  constructor(private Router: Router) { }
  form = new FormGroup({
    buildingName : new FormControl(),
    streetName : new FormControl(),
    city : new FormControl()
  })
  goToReview() {
    this.Router.navigate(['/review-details']);
  }

  ngOnInit() {
  }

}
