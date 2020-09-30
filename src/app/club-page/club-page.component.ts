import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ClubPageService} from './club-page.service'
@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.css']
})
export class ClubPageComponent implements OnInit {

public newClubForm=new FormGroup({
  name:new FormControl(''),
  about:new FormControl('')
})


  pageName;
  constructor(private clubPage:ClubPageService) { }
  ngOnInit(): void {
    this.pageName='CipherCell'
    this.getclubDetails()
    this.getClub()
  }
  header=["s no.","name","about","team"]

  getclubDetails(){
    this.clubPage.getClubDetails().subscribe((res)=>{
      // console.log(res)
      this.appendClubs(res)
    },
    err=>{
      console.log(err)
    })
  }
  clubs=[]
  appendClubs(res){
    let data=Object.entries(res)
    // console.log(data)
    for(let i=0;i<data.length;i++){
      this.clubs.push(data[i][1])
    }
    console.log(this.clubs)
  }
  getClub(){
    this.clubPage.getClubDetail(this.pageName).subscribe((res)=>{
      // console.log(res)
      this.appendClub(res)
    },
    err=>{
      console.log(err)
    })
  }
  events=[]
  club=[]
  appendClub(res){
    let data=Object.entries(res)
    console.log(data)
    for(let i=0;i<data.length;i++){
      let value=data[i][0]
      this.club.push({[value]:data[i][1]})
    }
    // this.events=[...(this.club[3])]
    this.appendEvents()
    console.log(this.club)
  }

  newEvent=[]
  appendEvents(){
   // console.log(this.events)
    let data=Object.entries(this.club[3])
    console.log(data)
    for(let i=0;i<data.length;i++){
      this.newEvent.push(data[i][1])
    }
    console.log(this.newEvent)
  }

  newClub(){
    let name=this.newClubForm.get('name').value
    let about=this.newClubForm.get('about').value
    let data={
      "name":name,
      "about":about
    }

    this.clubPage.newClub(data).subscribe((res)=>{
      console.log(res)
      this.getClub()
    },
    err=>{
      console.log(err)
    })
  }
  



}
