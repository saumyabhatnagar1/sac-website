import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-de-theatre',
  templateUrl: './club-de-theatre.component.html',
  styleUrls: ['./club-de-theatre.component.css']
})
export class ClubDeTheatreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content: string = "Club De Théâtre is another prominent club of the college. It is the official drama club of IIIT-NR which encourages \
  dramatic presentation by students in form of skits, mime, plays, nukkad natak, etc. The club works well to bring the culture of drama, comedy, \
  stand-up and other relevant stuff into the institute. The aim of this club is to explore, participate and learn as much as we can.";
}
