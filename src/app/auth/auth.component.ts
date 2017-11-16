import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth-service.service';
import { User } from '../models/user.interface';
import {HelperService} from '../services/Helpers/helper.service';
import {SaveToStorageService} from '../services/storage/save-to-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  authform: FormGroup;
  email: FormControl;
  password: FormControl;

  private user: User;

  constructor (private auth: AuthService, private helpers: HelperService, private save: SaveToStorageService) {}
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
  }
  createForm() {
    this.authform = new FormGroup({
      user: new FormGroup({
        email: this.email,
        password: this.password
      })
    });
  }
  onSubmit({user}) {
    const users = this.auth.getUser({
      email: user.email,
      name: user.email,
      id: this.helpers.randId(),
      password: user.password
    }).subscribe((el) => {
      if (typeof el === 'string') {
           if (el === ' user not found') {
             this.email.setErrors({
               user: el
             });
           }
           this.password.setErrors({
             passwordErr: el
           });
         return false;
      }
      this.auth.login();
       return true;
    });
  }

}
