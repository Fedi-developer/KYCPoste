import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../models/users';
import { Docum } from '../models/document';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private registerUrl = 'http://localhost:8000/api/register';
 private loginUrl = 'http://localhost:8000/api/login';
 private userURL= 'http://localhost:8000/api/user';
 private logoutUrl = 'http://localhost:8000/api/logout';
 private docUrl = 'http://localhost:8000/api/doc';

  constructor( private http: HttpClient) { }



  register(user: User):Observable<User>{             
    
   return this.http.post<User>(this.registerUrl, user, httpOptions);
      
}

  login(user: User):Observable<any>{             
   return this.http.post<User>(this.loginUrl, user, {withCredentials: true});    
  }

  getuser():Observable<User>{
   return this.http.get<User>(this.userURL, {withCredentials: true})
  }
  
  logout():Observable<User>{ 
  return this.http.post<User>(this.logoutUrl, {}, { withCredentials: true });
 }

  doc(docum: Docum):Observable<number>{
  return this.http.post<number>(this.docUrl, docum, httpOptions);
  }

}


