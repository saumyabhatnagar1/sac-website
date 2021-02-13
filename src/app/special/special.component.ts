import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, interval } from 'rxjs';

import { SpecialService } from './special.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: [
    './special.component.css',
    "../../assets/hackathon/fonts/line-icons.css",
    "../../assets/hackathon/css/nivo-lightbox.css",
    "../../assets/hackathon/css/animate.css",
    "../../assets/hackathon/css/main.css",
    "../../assets/hackathon/css/responsive.css"
  ]
})
export class SpecialComponent implements OnInit {

  private subscription: Subscription;
  
  public finalDate = new Date('Feb 26, 2021 22:00:00');

  public timeDifference;
  public secondsRemaining;
  public minutesRemaining;
  public hoursRemaining;
  public daysRemaining;

  constructor(private specialService: SpecialService) { }

  private getTimeDifference () {
      this.timeDifference = this.finalDate.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference) {
        this.secondsRemaining = Math.floor((timeDifference) / (1000) % 60);
        this.minutesRemaining = Math.floor((timeDifference) / (1000 * 60) % 60);
        this.hoursRemaining = Math.floor((timeDifference) / (1000 * 60 * 60) % 24);
        this.daysRemaining = Math.floor((timeDifference) / (1000 * 60 * 60 * 24));
  }

  ngOnInit() {
    // window.location.href = "https://139.59.81.57/";
    // window.location.href = "https://hackasol.tech/";
    
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

  public sponsorForm = new FormGroup({
    sponsor_name : new FormControl('', Validators.required),
    sponsor_job_title : new FormControl('', Validators.required),
    sponsor_email : new FormControl('', [Validators.required, Validators.email]),
    sponsor_org : new FormControl('', Validators.required),
    sponsor_phone : new FormControl('', Validators.required),
    sponsor_message : new FormControl('', Validators.required)
  })
  
  onSubmit1() {
    let sponsor_name = this.sponsorForm.get('sponsor_name').value
    let sponsor_job_title = this.sponsorForm.get('sponsor_job_title').value
    let sponsor_email = this.sponsorForm.get('sponsor_email').value
    let sponsor_org = this.sponsorForm.get('sponsor_org').value
    let sponsor_phone = this.sponsorForm.get('sponsor_phone').value
    let sponsor_message = this.sponsorForm.get('sponsor_message').value
    let data = {
      "sponsor_name": sponsor_name,
      "sponsor_job_title": sponsor_job_title,
      "sponsor_email": sponsor_email,
      "sponsor_phone": sponsor_phone,
      "sponsor_org": sponsor_org,
      "sponsor_message": sponsor_message
    }
    
    console.log(data);
    
    if (this.sponsorForm.valid) {
      this.specialService.newSponsorFeedback(data).subscribe((res) => {
        console.log(res)
      }, err => {
        console.log(err)
      });
      this.sponsorForm.reset();
    }
  }

  public contactForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    subject : new FormControl('', Validators.required),
    message : new FormControl('', Validators.required)
  })
  
  onSubmit2() {
    let name = this.contactForm.get('name').value
    let email = this.contactForm.get('email').value
    let subject = this.contactForm.get('subject').value
    let message = this.contactForm.get('message').value
    let data = {
      "name": name,
      "email": email,
      "subject": subject,
      "message": message
    }
    
    // console.log(data);
    
    if (this.contactForm.valid) {
      this.specialService.newFeedback(data).subscribe((res) => {
        console.log(res)
      }, err => {
        console.log(err)
      });
      this.contactForm.reset();
    }
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
