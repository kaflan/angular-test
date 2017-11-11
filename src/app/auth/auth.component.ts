import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../models/user.interface';
import {AuthService} from '../auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AuthComponent implements OnInit {
  user: User = {
    name: '',
    password: '',
    email: '',
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    // debugger;
    // this.auth.login(true);
    const users = this.auth.getUser(this.user).subscribe((el) => {
      console.log(el, 'el');
    });
    console.log('___', 'click', 'user', users);
  }

}
