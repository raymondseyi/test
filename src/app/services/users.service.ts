import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url ='http://localhost:7000/auth'
  postUser(userDetails:any){
      return this.http.post(`{this.url}/`,userDetails)
  }
  constructor(private http:HttpClient) { }
}
