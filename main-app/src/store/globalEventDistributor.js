export class GlobalEventDistributor {

    constructor() {
        this.stores = [];
    }

    registerStore(store,name) {
        this.stores.push({...store,name});
        //console.log(this.stores);
    }

    dispatch(event) {
        this.stores.forEach((s) => s.dispatch(event));
      //  this.stores.forEach(x=>console.log(x.getState()));
    }
}
