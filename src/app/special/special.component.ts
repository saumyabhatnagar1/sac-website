import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

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
  
  public finalDate = new Date('Feb 28, 2021 10:00:00');

  public timeDifference;
  public secondsRemaining;
  public minutesRemaining;
  public hoursRemaining;
  public daysRemaining;


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
     this.subscription = interval(1000)
         .subscribe(x => { this.getTimeDifference(); });
  }

 ngOnDestroy() {
    this.subscription.unsubscribe();
 }

}
