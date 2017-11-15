import {Injectable} from '@angular/core';

@Injectable()
export class SaveToStorageService {

  constructor() {
  }

  saveColectionToStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  getCollectionFromStorage(name) {
    return JSON.parse(localStorage.getItem(`${name}`));
  }

  updateItemInCollection(name, data) {
    const saveToCOllection = this.saveColectionToStorage;
    if (!this.getCollectionFromStorage(name)) {
      saveToCOllection(name, [].concat(data));
      return false;
    }
    saveToCOllection(name, this.getCollectionFromStorage(name).concat(data));
    return true;
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
    localStorage.removeItem(name);
  }

}
