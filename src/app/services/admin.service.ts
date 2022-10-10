import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  //category
  showCategory():Observable<any>{
    return this.httpClient.get(environment.url+"/category/")
  }

  deleteCategory(id:any){
    const header= { "categoryid": id };
    return this.httpClient.delete(environment.url+"/category/",{headers:header})
  }

  addCategory(category:any):Observable<any>{
    return this.httpClient.post(environment.url+"/category/",category);
  }

  editCategory(category:any):Observable<any>{
    return this.httpClient.put(environment.url+"/category/",category)
  }

  getCategory(categoryid:any):Observable<any>{
    const header= { "categoryid": categoryid };
    return this.httpClient.get(environment.url+"/category/particular",{headers:header})
  }

  //quizzes
  showQuizzes():Observable<any>{
    return this.httpClient.get(environment.url+"/quiz/")
  }

  deleteQuiz(id:any){
    const header= { "quizid": id };
    return this.httpClient.delete(environment.url+"/quiz/",{headers:header})
  }

  addQuiz(quiz:any):Observable<any>{
    return this.httpClient.post(environment.url+"/quiz/",quiz);
  }

  editQuiz(quiz:any):Observable<any>{
    return this.httpClient.put(environment.url+"/quiz/",quiz)
  }

  getQuiz(quizid:any):Observable<any>{
    const header= { "quizid": quizid };
    return this.httpClient.get(environment.url+"/quiz/particular",{headers:header})
  }


}

