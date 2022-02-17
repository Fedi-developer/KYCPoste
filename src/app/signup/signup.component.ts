import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   newuser = new User();  
  constructor(private authservice : AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }
  onSignup() {
  this.authservice.register(this.newuser).subscribe(user => 
    {console.log(user)
    this.router.navigate(['/login']);
  })
  }
}

