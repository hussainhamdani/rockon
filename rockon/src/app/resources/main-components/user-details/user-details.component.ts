import { IUser } from './../../../models/user';
import { StoreDateService } from './../../../services/store-date.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
  form = new FormGroup({
    firstName : this.firstName,
    lastName : this.lastName,
    email : this.email
  });
  goToAddress() {
    this.router.navigate(['/user-address'])
  }

  constructor(private router: Router, private service: StoreDateService) { }

  ngOnInit() {
    console.log(this.firstName);
    this.firstName.valueChanges.subscribe( form => {
      console.log(form);
     //this.service.setFieldValue();
    });
  }
}
