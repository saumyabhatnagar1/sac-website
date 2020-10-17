import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquizitive',
  templateUrl: './inquizitive.component.html',
  styleUrls: ['./inquizitive.component.css']
})
export class InquizitiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content: string = "True to its name, Inquizitive is the abode of the most curious minds of IIIT NR. \
  Inquizitive brings current affairs, general knowledge to you in a fun way. Thus, contributing to an increase in the IQ of the campus.";
}
