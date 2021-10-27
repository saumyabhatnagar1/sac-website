import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-hackasol',
  templateUrl: './hackasol.component.html',
  styleUrls: ['./hackasol.component.css'],
  providers: [NgbCarouselConfig]
})
export class HackasolComponent implements OnInit {

  title = 'ng-carousel-demo';
  
  images = [
    {title: '', short: '', src: "/assets/hackasol/images/logo/hack-logo.png"},
    // {title: '', short: '', src: "https://picsum.photos/id/1011/900/500"},
    // {title: '', short: '', src: "https://picsum.photos/id/984/900/500"}
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.keyboard = true;
    config.pauseOnHover = true; }

  ngOnInit(): void {
  }

}
