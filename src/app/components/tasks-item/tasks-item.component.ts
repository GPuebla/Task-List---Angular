import { Component, OnInit, Input} from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { task } from 'src/app/task';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: task[] = TASKS[0];
  constructor() { }

  ngOnInit(): void {
  }

}
