import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriteusService {

  constructor(private http :HttpClient) { }
  newFeedback(data){
    return this.http.post('https://formspree.io/f/mnqodyqg',data,{})
  }
}
