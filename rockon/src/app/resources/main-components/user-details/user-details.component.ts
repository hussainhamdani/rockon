import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserStoreActionsService } from '../../../services/actions/user-store.actions.service';


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

  constructor(private router: Router, private userStore: UserStoreActionsService) {
  }

  ngOnInit() {
    this.storeServiceSubscribe = this.userStore.event.subscribe(data => {
      this.firstName.setValue(data.firstName);
      this.lastName.setValue(data.lastName);
      this.email.setValue(data.email);
      this.phoneNumber.setValue(data.phoneNumber);
    });

    this.firstNameSubscribe = this.firstName.valueChanges.subscribe( form => {
      this.userStore.updateStoreDate(this.firstName.value, 'firstName');
    });

    this.lastNameSubscribe = this.lastName.valueChanges.subscribe( form => {
      this.userStore.updateStoreDate(this.lastName.value, 'lastName');
    });

    this.emailSubscribe = this.email.valueChanges.subscribe( form => {
      this.userStore.updateStoreDate(this.email.value, 'email');
    });

    this.phoneNumberSubscribe = this.phoneNumber.valueChanges.subscribe( form => {
      this.userStore.updateStoreDate(this.phoneNumber.value, 'phoneNumber');
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
