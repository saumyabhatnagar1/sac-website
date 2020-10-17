import { JsonPipe } from '@angular/common';
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ClubPageService} from './club-page.service'
import { CalendarView,CalendarEvent,CalendarEventTimesChangedEvent,CalendarEventAction} from 'angular-calendar';
import {Subject} from 'rxjs';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./club-page.component.css']
})
export class ClubPageComponent implements OnInit {

view:CalendarView=CalendarView.Month;
viewDate:Date=new Date();

modalData:{
  action:String,
  event:CalendarEvent;
}

events: CalendarEvent[] = [
  {
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'A 3 day event',
    color: colors.red,
    allDay: true,
    resizable: {
      beforeStart: true,
      afterEnd: true,
    },
    draggable: true,
  },
  {
    start: startOfDay(new Date()),
    title: 'An event with no end date',
    color: colors.yellow,
  },
  {
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    title: 'A long event that spans 2 months',
    color: colors.blue,
    allDay: true,
  },
  {
    start: addHours(startOfDay(new Date()), 2),
    end: addHours(new Date(), 2),
    title: 'A draggable and resizable event',
    color: colors.yellow,
    resizable: {
      beforeStart: true,
      afterEnd: true,
    },
    draggable: true,
  },
];

refresh:Subject<any>=new Subject()
activeDayIsOpen:boolean=true;
dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  if (isSameMonth(date, this.viewDate)) {
    if (
      (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
      events.length === 0
    ) {
      this.activeDayIsOpen = false;
    } else {
      this.activeDayIsOpen = true;
    }
    this.viewDate = date;
  }
}

eventClicked({ event }: { event: CalendarEvent }): void {
  console.log('Event clicked', event);
}


  value:Date

public newClubForm=new FormGroup({
  name:new FormControl(''),
  about:new FormControl('')
})
public newEventForm=new FormGroup({
  date:new FormControl(''),
  day:new FormControl(''),
  eventName: new FormControl('')
})

setView(view: CalendarView) {
  this.view = view;
}

closeOpenMonthViewDay() {
  this.activeDayIsOpen = false;
}

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
