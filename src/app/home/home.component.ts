import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/calendar'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value:Date;
  constructor() { }

  ngOnInit(): void {
  }

}
