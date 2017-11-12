import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
// Import our authentication service
import { AuthService } from './auth-service.service';
import { SaveToStorageService} from '../storage/save-to-storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private storage: SaveToStorageService) {}

  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    if (!this.storage.getCollectionFromStorage('auth')) {
      return false;
    }
    if (!this.auth.authenticated) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
