import { Injectable } from '@angular/core';
import sha256 from 'fast-sha256';
@Injectable()
export class HelperService {
  constructor() { }
  randId() {
    return Math.random().toString(36).substr(2, 10);
  }
  hash(data) {
    return sha256(data);
  }
}
