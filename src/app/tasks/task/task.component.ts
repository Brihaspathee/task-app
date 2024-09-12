import {Component, input, InputSignal} from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  task:InputSignal<Task>= input.required<Task>();
}
