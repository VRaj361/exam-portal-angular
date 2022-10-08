import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  loginUser(user:any,headers:any):Observable<any>{
    return this.httpClient.post(environment.url+"/user/login",user,{headers})
  }//for login

  generateToken(user:any):Observable<any>{
    return this.httpClient.post(environment.url+"/generate-token",user)
  }//email and password both required

  storeToken(token:any){
    localStorage.setItem("token",token)
  }//store token in local storage

  isLoggedIn(){
    const token = localStorage.getItem("token")
    token == undefined || token == null || token == ""?false:true;
  }//already login or not

  isLogout(){
    localStorage.removeItem("token")
    return true;
  }//remove the token in localstorage

  getToken(){
    return localStorage.getItem("token")
  }//get token in localstorage

  getCurrentUser(token:any):Observable<any>{
    return this.httpClient.get(environment.url+"/getcurrent-user",{headers:token})
  }

}
