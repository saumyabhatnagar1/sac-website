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
      start: startOfDay(new Date(2020,9,17)),
      title: 'Intra-College Team based Coding Competition: TSoC',
      
      color: colors.red,
      allDay: true,
      
    },
    {
      start: startOfDay(new Date(2020,9,24)),
      title: 'Spill the Paint + Craft Tastic: Indradhanush',
      color: colors.yellow,
    },
    {
      start:startOfDay(new Date(2020,9,24)),
      title:'Event: Club De Theatre',
      color:colors.blue,
      allDay:true
    },
    {
      start:startOfDay(new Date(2020,9,27)),
      title:'Quiz: Inquizitive',
      color:colors.green,
      allDay:true
    },
    {
      title:'E-Gaming: Atharv',
      start:startOfDay(new Date(2020,9,31)),
      color:colors.purple,
      allDay:true
    },
    {
      title:'Ideathon: Tech4Gud',
      start:startOfDay(new Date(2020,9,31)),
      color:colors.pink,
      allDay:true,
    },{
      title:'Circuit Quiz: ComEt',
      start:startOfDay(new Date(2020,10,1)),
      color:colors.lyellow
    },
    {
      title:'Click Flick: ShutterBug',
      start:startOfDay(new Date(2020,10,2)),
      color:colors.lblue,
      allDay:true
    },
    {
      title:'Story Writing: Cover to Cover (C2C)',
      start:startOfDay(new Date(2020,10,8)),
      color:colors.dblue,
      allDay:true
    },{
      title:'Dance Workshop: Igniters',
      start:startOfDay(new Date(2020,10,8)),
      color:colors.lpurple,
      allDay:true,
    },
    {
      title:'Intra-College Coding Competition: The Society of Coders (TSoC)',
      start:startOfDay(new Date(2020,10,10)),
      color:colors.red,
      allDay:true
    },
    {
      title:'Hackathon: AI/ML Club',
      start:startOfDay(new Date(2020,10,21)),
      color:colors.dgreen,
      allDay:true
    },{
      title:'Just a Minute: Cover to Cover (C2C)',
      start:startOfDay(new Date(2020,10,22)),
      color:colors.dblue,
      allDay:true,
    },{
      title:'Intra-College Coding Competition: The Society of Coders (TSoC)',
      start:startOfDay(new Date(2020,8,2020)),
      color:colors.red
    },
    {
      title:'Online Poetry Competition: Cover To Cover (C2C)',
      start:startOfDay(new Date(2020,8,19)),
      color:colors.dblue
    },
    {
      title:'Online Chess: Atharv',
      start:startOfDay(new Date(2020,8,19)),
      color:colors.purple
    },
    {
      title:'Ideathon: ComEt',
      start:startOfDay(new Date(2020,8,26)),
      color:colors.lyellow
    },
    {
      title:'The Unwind Mix: Capriccio',
      start:startOfDay(new Date(2020,9,2)),
      color:colors.orange
    },
    {
      title:'Quiz Competition: Inquizitive',
      start:startOfDay(new Date(2020,9,2)),
      color:colors.green

    },
    {
      title:'Debate: Take the bait',
      start:startOfDay(new Date(2020,9,3)),
      color:colors.lbrown,
    },
    {
      title:'Online Gaming: Atharv',
      start:startOfDay(new Date(2020,9,4)),
      color:colors.purple
    },
    {
      title:'Shutter Island: ShutterBug',
      start:startOfDay(new Date(2020,9,10)),
      color:colors.lblue
    },
    {
      title:'How to make big in CyberSecurity: CipherCell',
      start:startOfDay(new Date(2020,9,10)),
      color:colors.gray
    },
    {
      title:'T4G Outreach Program: Tech4Gud',
      start:startOfDay(new Date(2020,9,11)),
      color:colors.Pink
    },
    {
      title:'Cultural Night: Cover to Cover (C2C)/Igniters/Capriccio',
      start:startOfDay(new Date(2020,9,16)),
      color:colors.misc
    }
    
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


  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }


}