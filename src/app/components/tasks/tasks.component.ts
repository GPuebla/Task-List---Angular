import { Component, OnInit, Input } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../../task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = TASKS;
  

  constructor() { }

  ngOnInit(): void {
  }

}
