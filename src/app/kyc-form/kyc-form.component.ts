import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Profile} from '../models/profile'
@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css']
})
export class KYCFormComponent implements OnInit {
  cookieExists!: boolean
  profile =new Profile();
  client = localStorage.getItem('client');
  constructor(private cookieService: CookieService) {
    this.cookieExists = this.cookieService.check('jwt');
   }

  ngOnInit(): void { 

  }

}
