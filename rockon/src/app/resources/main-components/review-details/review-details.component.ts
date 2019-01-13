import { Component } from '@angular/core';
import { UserStore } from '../../../services/entities/user.store';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent{
  userDetails: UserStore;

  constructor(private userStore: UserStore){
    this.userDetails = userStore;
  }

}
