import { Injectable } from '@angular/core';
import { IUser } from '../../models/user';
@Injectable ({
  providedIn: 'root',
})

export class UserStore implements IUser {
    firstName : '';
    lastName: '';
    email: '';
    phoneNumber: '';
    unitNumber:'';
    street: '';
    city: '';
    postalCode: '';
    country: ''
}