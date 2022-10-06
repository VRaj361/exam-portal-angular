import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpClient:HttpClient) { }

  signUpUser(user:any):Observable<any>{
    return this.httpClient.post(environment.url+"/user/signup",user)
  }

  loginUser(user:any):Observable<any>{
    return this.httpClient.post(environment.url+"/user/login",user)
  }

  forgotPassword(user:any):Observable<any>{
    return this.httpClient.post(environment.url+"/user/forgotpassword",user)
  }

}
