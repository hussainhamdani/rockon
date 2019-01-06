import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
@Injectable ({
  providedIn: 'root',
})

export class SUser implements IUser {
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