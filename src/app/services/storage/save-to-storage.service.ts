import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SaveToStorageService {

  constructor() {
  }

  saveCollectionToStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
    return new Observable(
      observer => {
        observer.next(this.getCollection(name));
        if (!this.getCollection(name)) {
          observer.error(this.getCollection(name));
          observer.complete();
        }
      }
    );
  }

  getCollectionFromStorage(name) {
    return new Observable(observer => {
      if (this.getCollection(name)) {
        observer.next(this.getCollection(name));
      }
      if (!this.getCollection(name)) {
        observer.error(this.getCollection(name));
        observer.complete();
      }
    });
  }

  getCollection(name) {
    return JSON.parse(localStorage.getItem(`${name}`));
  }

  updateItemInCollection(name, data) {
    return this.saveCollectionToStorage(name, this.getCollection(name) ?
      this.getCollection(name).concat(data) : [].concat(data));
  }

  removeItemInCollection(name, id) {
    const collection = this.getCollection(name);
    const newCollection = collection.reduce((previousValue, currentValue) => {
      if (currentValue.id === id || previousValue.id === id) {
        return previousValue.concat();
      }
      return previousValue.concat(currentValue);
    }, []);
    return this.saveCollectionToStorage(name, newCollection);
  }

  clearAll() {
    localStorage.clear();
  }

  removeCollection(name) {
    localStorage.removeItem(name);
  }

}
