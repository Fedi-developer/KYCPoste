import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { RDVComponent } from './rdv/rdv.component';
import { VisioconferenceComponent } from './webrtc/visioconference/visioconference.component';
import { KYCComponent } from './kyc/kyc.component';
import { KYCFormComponent } from './kyc-form/kyc-form.component';
import { KYCUploadComponent } from './kyc-upload/kyc-upload.component';
import { KYCfinalComponent } from './kycfinal/kycfinal.component';
import { KycsuccessComponent } from './kycsuccess/kycsuccess.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AdminComponent } from './the-admin/admin/admin.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'RDV', component: RDVComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'about', component: AboutComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'visio', component: VisioconferenceComponent},
  {path: 'kyc', component: KYCComponent},
  {path: 'kycform', component: KYCFormComponent},
  {path: 'kycupload', component: KYCUploadComponent},
  {path: 'kycfinal/:id', component: KYCfinalComponent},
  {path: 'kycsuccess', component: KycsuccessComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: Page404Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
