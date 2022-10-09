import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  showCategory():Observable<any>{
    return this.httpClient.get(environment.url+"/category/")
  }

  deleteCategory(id:any){
    const header= { "categoryid": id };
    return this.httpClient.delete(environment.url+"/category/",{headers:header})
  }

}

