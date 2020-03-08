import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  login: Login = new Login();

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  valid(): boolean {
    return !(this.login.email && this.login.senha);
  }

  btnLogar(): void {
    this.router.navigate(['admin', 'home']);
  }
}
