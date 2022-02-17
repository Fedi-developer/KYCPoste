import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navclient',
  templateUrl: './navclient.component.html',
  styleUrls: ['./navclient.component.css']
})
export class NavclientComponent implements OnInit {
  @Input() public client: any
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
    });
  }

}
