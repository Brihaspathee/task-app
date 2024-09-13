import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
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

  complete: OutputEmitterRef<string>= output<string>()

  onCompleteTask() {
    this.complete.emit(this.task().id)
  }
}
