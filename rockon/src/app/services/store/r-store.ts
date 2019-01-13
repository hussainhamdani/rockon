import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { StoreDataService } from "./store-data.service";
import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RStore {
    private store: any;
    private dataSource: BehaviorSubject<any>;
    private thisService: any;
    constructor(public storeData: StoreDataService) {
    }

    setStore(storeValue: any) {
        this.store = storeValue;
        this.dataSource = new BehaviorSubject<any>(this.store);
        this.thisService = this.dataSource.asObservable();

        //set backnd store details
        this.storeData.set_storeType(this.store.constructor.name);

        //get existing store details from backend
        this.storeData.get_store().subscribe((res : any)=>{
            Object.assign(this.store , res);
            this.dataSource.next(this.store);
        });
    }

    getStoreDateService() {
        return this.thisService;
    }

    updateStoreDate(value: (string | number | boolean), name: string) {
        if(this.store[name] !== value) {
            this.store[name] = value;
            this.storeData.set_store(this.store).subscribe((res : any)=>{
                console.log(res);
            });
            this.dataSource.next(this.store);
        }
    }
}