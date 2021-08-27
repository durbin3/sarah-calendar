import { Component, Input, OnInit } from '@angular/core';
import { DayComponent } from '../day/day.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  month!: {name:string, number:number};
  weeks: DayComponent[][] = [];
  date!: Date;
  constructor() { }
  ngOnInit(): void {
    this.date = new Date();
    this.month = this.getMonth();
    this.weeks = this.getWeeks();
  }

  getWeeks(): DayComponent[][] {
    var weeks: DayComponent[][] = [];
    for (var i = 0; i < 5; i++){
      weeks.push([]);
      for (var j = 0; j < 7; j++){
        weeks[i].push(new DayComponent())
      }
    }
    return weeks;
  }

  weekCount(year:number, month_number:number) {
    var firstOfMonth = new Date(year, month_number-1, 1);
    var lastOfMonth = new Date(year, month_number, 0);
    var used = firstOfMonth.getDay() + lastOfMonth.getDate();
    return Math.ceil( used / 7);
}


  

  getMonth(): {name:string, number:number} {
    const dateNumber = this.date.getMonth();
    return {name:this.Months[dateNumber].name, number:dateNumber};
  }



  Months = [
    {
      "abbreviation": "Jan",
      "name": "January"
    },
    {
      "abbreviation": "Feb",
      "name": "February"
    },
    {
      "abbreviation": "Mar",
      "name": "March"
    },
    {
      "abbreviation": "Apr",
      "name": "April"
    },
    {
      "abbreviation": "May",
      "name": "May"
    },
    {
      "abbreviation": "Jun",
      "name": "June"
    },
    {
      "abbreviation": "Jul",
      "name": "July"
    },
    {
      "abbreviation": "Aug",
      "name": "August"
    },
    {
      "abbreviation": "Sep",
      "name": "September"
    },
    {
      "abbreviation": "Oct",
      "name": "October"
    },
    {
      "abbreviation": "Nov",
      "name": "November"
    },
    {
      "abbreviation": "Dec",
      "name": "December"
    }
  ]
}
