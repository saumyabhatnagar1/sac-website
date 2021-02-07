import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SpecialService {

  constructor(private http :HttpClient) { }
  
  newSponsorFeedback(data) {
    return this.http.post('https://formspree.io/f/mbjpbqlo', data, {});
  }

  newFeedback(data) {
    return this.http.post('https://formspree.io/f/mvovyvbr', data, {});
  }
}
