import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClubPageService {

  constructor(private http:HttpClient) { }
  baseApiUrl='http://localhost:3000/'
  getClubDetails(){
    return this.http.get(this.baseApiUrl+'getall',{})
  }
  getClubDetail(name){
    return this.http.get(this.baseApiUrl+`getclub/${name}`,{})
  }
  newClub(data){
    return this.http.post(this.baseApiUrl+'newclub',data,{})
  }
  newFeedback(data){
    return this.http.post('https://formspree.io/f/mqkgqozv',data,{})
  }
}
