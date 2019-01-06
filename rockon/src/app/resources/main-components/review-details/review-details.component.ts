import { Component } from '@angular/core';
import { StoreDateService } from '../../../services/store-date.service';
import { SUser } from '../../../services/user-store';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent{
  userDetails: SUser;

  constructor(private userStore: SUser){
    this.userDetails = userStore;
  }

}
