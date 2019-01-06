import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

export class RStore{
    private store: any;
    private dataSource: BehaviorSubject<any>;
    private thisService: any;

    constructor(storeValue: any) {
        this.store = storeValue;
        this.dataSource = new BehaviorSubject<any>(this.store);
        this.thisService = this.dataSource.asObservable()
    }

    getStoreDateService() {
        return this.thisService;
    }

    updateStoreDate(value: (string | number), name: string) {
        if(this.store[name] !== value) {
            this.store[name] = value;
            this.dataSource.next(this.store);
        }
    }
}

export class RStoreService {
    private rStore: RStore;
    setStoreInetial(inetialStore: any) {
        return this.rStore =  this.rStore || new RStore(inetialStore);
    }
}