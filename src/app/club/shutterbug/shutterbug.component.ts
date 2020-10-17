import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shutterbug',
  templateUrl: './shutterbug.component.html',
  styleUrls: ['./shutterbug.component.css']
})
export class ShutterbugComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content: string = "Shutterbug is IIIT Naya Raipur's offical photography club.\
  This club intends to help interested students of photography to learn about the fundamentals of this field. \
  It provides a supportive environment to students of our institute to share their knowledge and passion for photography. \
  The club runs under the guidance of Dr Ramakrishna Bandi. \
  We cover all the major events that happen in our institute, also we organise various photography workshops, exhibition etc.";
}
