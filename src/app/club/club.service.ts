import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http:HttpClient) { }

  clubDetails(){
    const headers=new HttpHeaders({
      'Content-type':'application/json'
    })
    return this.http.get('http://localhost:3000/getall',{headers:headers})
  }
}
