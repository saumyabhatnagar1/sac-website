import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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


}
