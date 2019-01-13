import { Injectable} from '@angular/core';
import { UserStoreInterfaceService } from '../entities/user-store.interface.service';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { UserStore } from "../entities/user.store";

@Injectable({
    providedIn: 'root'
})

export class UserStoreActionsService {
    public event: BehaviorSubject<any>;

    constructor( private userStoreInterface: UserStoreInterfaceService, private user: UserStore) {
        this.userStoreInterface.setStore(user);
        this.event = this.userStoreInterface.getStoreDateService();
    }

    updateStoreDate(value: (string | number | boolean ), name: string) {
        this.userStoreInterface.updateStoreDate(value, name);
    }
}