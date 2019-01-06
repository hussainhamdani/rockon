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

  private storeServiceSubscribe;
  private unitNumberSubscribe;
  private streetSubscribe;
  private citySubscribe;
  private postalCodeSubscribe;
  private countrySubscribe;
  private rStore;
  
  constructor(private Router: Router, private userStore: RStoreService, private userData: SUser) {
    this.rStore = userStore.setStoreInetial(userData)
  }

  ngOnInit() {
    this.storeServiceSubscribe = this.rStore.getStoreDateService().subscribe(data => {
      this.unitNumber.setValue(data.unitNumber);
      this.street.setValue(data.street);
      this.city.setValue(data.city);
      this.postalCode.setValue(data.postalCode);
      this.country.setValue(data.country);
    });

    this.unitNumberSubscribe = this.unitNumber.valueChanges.subscribe( form => {
      this.rStore.updateStoreDate(this.unitNumber.value, 'unitNumber');
    });

    this.streetSubscribe = this.street.valueChanges.subscribe( form => {
      this.rStore.updateStoreDate(this.street.value, 'street');
    });

    this.citySubscribe = this.city.valueChanges.subscribe( form => {
      this.rStore.updateStoreDate(this.city.value, 'city');
    });

    this.postalCodeSubscribe = this.postalCode.valueChanges.subscribe( form => {
      this.rStore.updateStoreDate(this.postalCode.value, 'postalCode');
    });

    this.countrySubscribe = this.country.valueChanges.subscribe( form => {
      this.rStore.updateStoreDate(this.country.value, 'country');
    });
  }

  ngOnDestroy() {
    this.storeServiceSubscribe.unsubscribe();
    this.unitNumberSubscribe.unsubscribe();
    this.streetSubscribe.unsubscribe();
    this.citySubscribe.unsubscribe();
    this.postalCodeSubscribe.unsubscribe();
    this.countrySubscribe.unsubscribe();
  }

  goToReview() {
    this.Router.navigate(['/review-details']);
  }

}
