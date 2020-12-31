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
  startOfHour,
} from 'date-fns';
// import { start } from 'repl';

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
  green: {
    primary:'#65D157'
  },
  purple: {
    primary:'#8257D1'
  },
  pink: {
    primary:'#DF3561'
  },
  lyellow: {
    primary:'#B6DF35'
  },
  lblue: {
    primary:'#35DFB5'
  },
  dblue: {
    primary:'#355DDF'
  },
  lpurple: {
    primary:'#DF3580'
  },
  dgreen: {
    primary:'#2D6806'
  },
  orange: {
    primary:'#EE7F11'
  },
  lbrown: {
    primary:'#9A7958'
  },
  gray: {
    primary:'#B1A7A6'
  },
  misc: {
    primary:'#1CD0E4'
  }
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

  modalData: {
    action:String,
    event:CalendarEvent;
  }

  events: CalendarEvent[] = [
    {
      title: "Digital Art Workshop: Indradhanush",
      start: startOfDay(new Date(2020,11,27)),
      color: colors.yellow,
      allDay: true,
    },
    {
      title: "Digital Art Workshop: Indradhanush",
      start: startOfDay(new Date(2020,11,28)),
      color: colors.yellow,
      allDay: true,
    },
    {
      title: "Fresher Cookie Quiz: Inquizitive",
      start: startOfDay(new Date(2021,0,3)),
      color: colors.green,
      allDay: true,
    },
    {
      title: "Release of Fresher's Video: ShutterBug",
      start: startOfDay(new Date(2021,0,10)),
      color: colors.lblue,
      allDay: true,
    },
    {
      title: "Quiz: ComEt",
      start: startOfDay(new Date(2021,0,15)),
      color: colors.lyellow,
      allDay: true,
    },
    {
      title: "Online Chess: Atharv",
      start: startOfDay(new Date(2021,0,23)),
      color: colors.purple,
      allDay: true,
    },
    {
      title: "Glory in Art: Indradhanush",
      start: startOfDay(new Date(2021,0,24)),
      color: colors.yellow,
      allDay: true,
    },
    {
      title: "Intra Coding Competition: TSoC",
      start: startOfDay(new Date(2021,0,30)),
      color: colors.red,
      allDay: true,
    },
    {
      title: "Open Mic: Cover to Cover (C2C)",
      start: startOfDay(new Date(2021,0,31)),
      color: colors.dblue,
      allDay: true,
    },
    {
      title: "Best Foot Forward: Igniters",
      start: startOfDay(new Date(2021,1,4)),
      color: colors.lpurple,
      allDay: true,
    },
    {
      title: "NGO Guest Talk: Tech4Gud",
      start: startOfDay(new Date(2021,1,5)),
      color: colors.pink,
      allDay: true,
    },
    {
      title: "Antakshari: Capriccio",
      start: startOfDay(new Date(2021,1,6)),
      color: colors.orange,
      allDay: true,
    },
    {
      title: "Guest Talk: TSoC",
      start: startOfDay(new Date(2021,1,7)),
      color: colors.red,
      allDay: true,
    },
    {
      title: "Flex Your AI/ML Skills: AI/ML",
      start: startOfDay(new Date(2021,1,13)),
      color: colors.dgreen,
      allDay: true,
    },
    {
      title: "Entertainment Quiz: Inquizitive",
      start: startOfDay(new Date(2021,1,14)),
      color: colors.green,
      allDay: true,
    },
    {
      title: "Rocket League (2v2): Atharv",
      start: startOfDay(new Date(2021,1,20)),
      color: colors.purple,
      allDay: true,
    },
    {
      title: "TBD: CipherCell",
      start: startOfDay(new Date(2021,1,21)),
      color: colors.gray,
      allDay: true,
    },
    {
      title: "Online Debate: Take da bait",
      start: startOfDay(new Date(2021,1,27)),
      color: colors.lbrown,
      allDay: true,
    },
    {
      title: "Coding Contest: TSoC",
      start: startOfDay(new Date(2021,1,28)),
      color: colors.red,
      allDay: true,
    },
    {
      title: "8 Ball Pool: Atharv",
      start: startOfDay(new Date(2021,2,6)),
      color: colors.purple,
      allDay: true,
    },
    {
      title: "Workshop 2.0: Igniters",
      start: startOfDay(new Date(2021,2,7)),
      color: colors.lpurple,
      allDay: true,
    },
    {
      title: "Wild Card: Cover to Cover (C2C)",
      start: startOfDay(new Date(2021,2,19)),
      color: colors.dblue,
      allDay: true,
    },
    {
      title: "Jam Acoustic 2.0: Capriccio",
      start: startOfDay(new Date(2021,2,27)),
      color: colors.orange,
      allDay: true,
    },
    {
      title: "FUNtastic: Indradhanush",
      start: startOfDay(new Date(2021,2,30)),
      color: colors.yellow,
      allDay: true,
    },
    {
      title: "Hackathon: AI/ML",
      start: startOfDay(new Date(2021,2,31)),
      color: colors.dgreen,
      allDay: true,
    },
    {
      title: "Workshop on Public Speaking: Take da bait",
      start: startOfDay(new Date(2021,3,1)),
      color: colors.lbrown,
      allDay: true,
    },
    {
      title: "Intra College CTF: CipherCell",
      start: startOfDay(new Date(2021,3,2)),
      color: colors.gray,
      allDay: true,
    },
    {
      title: "TBD: ComET",
      start: startOfDay(new Date(2021,3,4)),
      color: colors.lyellow,
      allDay: true,
    },
    {
      title: "Development Event: TSoC",
      start: startOfDay(new Date(2021,3,9)),
      color: colors.red,
      allDay: true,
    },
    {
      title: "Click for Good: ShutterBug",
      start: startOfDay(new Date(2021,3,10)),
      color: colors.lblue,
      allDay: true,
    },
    {
      title: "Cultural Night: Cultural Coordinators",
      start: startOfDay(new Date(2021,3,14)),
      color: colors.misc,
      allDay: true,
    },
    {
      title: "Dance It Out: Igniters",
      start: startOfDay(new Date(2021,3,16)),
      color: colors.lpurple,
      allDay: true,
    },
    {
      title: "TBD: Tech4Gud",
      start: startOfDay(new Date(2021,3,16)),
      color: colors.pink,
      allDay: true,
    },
    {
      title: "Coding Contest: TSoC",
      start: startOfDay(new Date(2021,3,17)),
      color: colors.red,
      allDay: true,
    },
    {
      title: "Valorant Tournament: Atharv",
      start: startOfDay(new Date(2021,3,18)),
      color: colors.purple,
      allDay: true,
    },
    {
      title: "Drama Session: Club de theatre",
      start: startOfDay(new Date(2021,3,24)),
      color: colors.blue,
      allDay: true,
    },
    {
      title: "CS:GO Tournament: Atharv",
      start: startOfDay(new Date(2021,4,15)),
      color: colors.purple,
      allDay: true,
    },
  ];

  refresh:Subject<any>=new Subject()
  activeDayIsOpen:boolean=false;
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length ===0
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


  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }


}