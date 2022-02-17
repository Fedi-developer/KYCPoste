import { User } from './../models/users';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User
  constructor(private authservice : AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(){
 this.authservice.login(this.user).subscribe(token =>
  {console.log(token)
  var decoded = jwt_decode(token.jwt);
  var ch = JSON.stringify(decoded)
  var jj= JSON.parse(ch)
  localStorage.setItem("id", jj.id)
  this.router.navigate(['/'])
  })
  }
}
