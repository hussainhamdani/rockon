import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SUser} from '../../../services/user-store';
import { RStoreService, RStore } from '../../../services/r-store';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
  phoneNumber = new FormControl();
  form = new FormGroup({
    firstName : this.firstName,
    lastName : this.lastName,
    email : this.email,
    phoneNumber: this.phoneNumber
  });

  private storeServiceSubscribe;
  private firstNameSubscribe;
  private lastNameSubscribe;
  private emailSubscribe;
  private phoneNumberSubscribe;
  private rStore: RStore;

  constructor(private router: Router, private userStore: RStoreService, private userData: SUser){
    this.rStore = userStore.setStoreInetial(userData);
  }

  ngOnInit() {
    this.storeServiceSubscribe = this.rStore.getStoreDateService().subscribe(data => {
      this.firstName.setValue(data.firstName);
      this.lastName.setValue(data.lastName);
      this.email.setValue(data.email);
      this.phoneNumber.setValue(data.phoneNumber);
    });

    this.firstNameSubscribe = this.firstName.valueChanges.subscribe( form => {
      this.rStore.updateStoreDate(this.firstName.value, 'firstName');
    });

    this.lastNameSubscribe = this.lastName.valueChanges.subscribe( form => {
      this.rStore.updateStoreDate(this.lastName.value, 'lastName');
    });

    this.emailSubscribe = this.email.valueChanges.subscribe( form => {
      this.rStore.updateStoreDate(this.email.value, 'email');
    });

    this.phoneNumberSubscribe = this.phoneNumber.valueChanges.subscribe( form => {
      this.rStore.updateStoreDate(this.phoneNumber.value, 'phoneNumber');
    });
  }

  ngOnDestroy() {
    this.storeServiceSubscribe.unsubscribe();
    this.firstNameSubscribe.unsubscribe();
    this.lastNameSubscribe.unsubscribe();
    this.emailSubscribe.unsubscribe();
    this.phoneNumberSubscribe.unsubscribe();
  }

  goToAddress() {
    this.router.navigate(['/user-address'])
  }
}
