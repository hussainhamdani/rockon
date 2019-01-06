import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IUser } from '../models/user';
@Injectable ({
  providedIn: 'root',
})

export class User implements IUser {
  firstName: '';
  lastName: '';
  email: '';
  phoneNumber: '';
  unitNumber: '';
  street: '';
  city: '';
  postalCode: '';
}

export class StoreDateService {

  private user: User =  new User();
  private dataSource: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
  private thisService = this.dataSource.asObservable();

  constructor() {}

  getStoreDateService() {
    return this.thisService;
  }

  updateUserDate(value: (string | number), name: string) {
    this.user[name] = value;
    this.dataSource.next(this.user);
  }
}