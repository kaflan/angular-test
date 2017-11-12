import {Injectable} from '@angular/core';

@Injectable()
export class SaveToStorageService {

  constructor() {
  }

  saveColectionToStorage(name, data) {
    localStorage.setItem(`${name}`, JSON.stringify(data));
  }

  getCollectionFromStorage(name) {
    return JSON.parse(localStorage.get(`${name}`));
  }

  updateItemInCollection(name, data) {
    const collection = this.getCollectionFromStorage(name);
    if (!collection) {
      return [];
    }
    return collection.reduce((element, prev) => {
      if (element.id === data.id) {
        return prev.concat(data);
      }
      return prev.concat(element);
    }, []);
  }

  removeItemInCollection(name, id) {
    const collection = this.getCollectionFromStorage(name);
    if (!collection) {
      return [];
    }
    return collection.reduce((element, prev) => {
      if (element.id === id) {
        return prev.concat();
      }
      return prev.concat(element);
    }, []);
  }

  clearAll() {
    localStorage.clear();
  }

  removeCollection(name) {
    localStorage.removeItem(`${name}`);
  }

}
