import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-kyc-upload',
  templateUrl: './kyc-upload.component.html',
  styleUrls: ['./kyc-upload.component.css']
})
export class KYCUploadComponent implements OnInit {
  cookieExists!:boolean
  passport:string="passport";
  card:string="card";
  licence:string="licence";
  constructor(private cookieService: CookieService) { 

    

  }

  ngOnInit(): void {
    this.cookieExists = this.cookieService.check('jwt');

  }

}
