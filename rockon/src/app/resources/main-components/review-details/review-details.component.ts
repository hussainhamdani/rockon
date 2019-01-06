import { User } from '../../../services/store-date.service';
import { Component, OnInit } from '@angular/core';
import { StoreDateService } from '../../../services/store-date.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {
  userDetails: User;

  constructor(private storeService: StoreDateService) {
    this.storeService.getStoreDateService().subscribe(data => {
      console.log('ReviewDetailsComponent');
      this.userDetails = data;
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
