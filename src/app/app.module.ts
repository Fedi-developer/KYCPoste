import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CookieService } from 'ngx-cookie-service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RDVComponent } from './rdv/rdv.component';
import { SignupComponent } from './signup/signup.component';
import { VisioconferenceComponent } from './webrtc/visioconference/visioconference.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { NavclientComponent } from './navclient/navclient.component';
import { KYCComponent } from './kyc/kyc.component';
import { KYCFormComponent } from './kyc-form/kyc-form.component';
import { KYCUploadComponent } from './kyc-upload/kyc-upload.component';
import { KYCfinalComponent } from './kycfinal/kycfinal.component';
import { KycsuccessComponent } from './kycsuccess/kycsuccess.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AdminComponent } from './the-admin/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    RDVComponent,
    SignupComponent,
    VisioconferenceComponent,
    AccountComponent,
    SettingsComponent,
    NavclientComponent,
    KYCComponent,
    KYCFormComponent,
    KYCUploadComponent,
    KYCfinalComponent,
    KycsuccessComponent,
    CalendarComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(), 
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
   
    
  ],
  providers: [AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
