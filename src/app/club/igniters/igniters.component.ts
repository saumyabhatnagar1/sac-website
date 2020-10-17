import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-igniters',
  templateUrl: './igniters.component.html',
  styleUrls: ['./igniters.component.css']
})
export class IgnitersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content: string = "Igniters, as the name suggests, aims at creating sparks and blindings by sweeping everyone's feet with the dancing. \
  Started two years ago, the club has achieved various success on and off the campus and we intend to continue the legacy in the upcoming years too. \
  Join us in the journey and let's express, relish and celebrate the Art of Dance together.";
}
