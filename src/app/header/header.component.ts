import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../services/auth/auth-guard-service.service';
import {AuthService} from '../services/auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor( private guard: AuthGuardService, private auth: AuthService) { }

  ngOnInit() {
  }
  logOut() {
    this.auth.logOut();
  }
}
