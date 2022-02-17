import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated = false;
  constructor(private authservice : AuthService, private router: Router) { 
  }
  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(){
    this.authservice.logout().subscribe(message => {console.log(message)
    this.authenticated = false
    localStorage.removeItem('client');
    localStorage.removeItem('id')
    this.router.navigate(['/'])
    });
  }

}
