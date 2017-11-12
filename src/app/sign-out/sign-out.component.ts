import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth-service.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignOutComponent implements OnInit {
  constructor(private route: Router,
  private auth: AuthService) { }

  ngOnInit() {
    this.auth.logOut();
    this.route.navigate(['']);
  }

}
