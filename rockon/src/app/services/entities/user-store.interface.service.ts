import { Injectable} from '@angular/core';
import { RStore } from '../store/r-store';

@Injectable({
    providedIn: 'root'
})

export class UserStoreInterfaceService extends RStore {}