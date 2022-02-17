import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Emitters} from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  client : string='';
  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
    this.authservice.getuser().subscribe(
      (res: any) => {
        this.client = `${res.first_name} ${res.last_name}`;
        localStorage.setItem('client', this.client);
        Emitters.authEmitter.emit(true);
      },
      err => {
        Emitters.authEmitter.emit(false);
      }
    );
  }

}
