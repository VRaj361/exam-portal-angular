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

  loginUser(user:any,headers:any):Observable<any>{
    return this.httpClient.post(environment.url+"/user/login",user,{headers})
  }

  forgotPassword(user:any,headers:any):Observable<any>{
    return this.httpClient.post(environment.url+"/user/forgotpassword",user,{headers})
  }//incomplete

  generateToken(user:any):Observable<any>{
    return this.httpClient.post(environment.url+"/generate-token",user)
  }//email and password both required

  generateTokenForForgetPassword(user:any):Observable<any>{
    return this.httpClient.post(environment.url+"/generate-tokens",user)
  }//email required



}
