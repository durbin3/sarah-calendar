import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() number!: number;
  tasks!: string[];
  constructor() { }

  ngOnInit(): void {
    
    this.tasks = [''];
  }

}
