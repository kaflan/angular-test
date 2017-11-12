import { Component, OnInit, OnChanges } from '@angular/core';
import {  FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';
import { User } from '../models/user.interface';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit, OnChanges {
  authform: FormGroup;
  email: FormControl;
  password: FormControl;
  error:string;
  private user: User;

  constructor (private auth:AuthService) {}
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
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
  ngOnChanges(changes: any) {
    console.log(changes);
  }
  onSubmit({user}) {
    this.error = '';
    console.log(user);
    const users = this.auth.getUser(user).subscribe((el) => {
      if(typeof el === 'string') {
          debugger
          this.error = el;
      }
    });
    // console.log('___', 'click', 'user', user);
  }

}
