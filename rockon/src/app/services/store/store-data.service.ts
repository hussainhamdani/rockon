import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  private baseUrl:string = "http://localhost:8081";
  private storeType: string = '';

  constructor(private httpClient : HttpClient) { 
  }

  set_storeType(value : string):void {
    this.storeType = value;
  }
  
  get_store() {
      return this.httpClient.get(this.baseUrl + '/get-store/' + this.storeType + '/user1');
  }

  set_store(store: any) {
      return this.httpClient.post(this.baseUrl + '/set-store/' + this.storeType + '/user1', store);
  }
}
