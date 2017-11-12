import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// Import our authentication service
import { AuthService } from './auth-service.service';
import { SaveToStorageService} from '../storage/save-to-storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private storage: SaveToStorageService) {}

  canActivate() {
    if (!this.auth.authenticated && !this.storage.getCollectionFromStorage('auth')) {
      return false;
    }
    return true;
  }

}
