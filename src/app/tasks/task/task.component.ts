import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import { Task } from './task.model';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'task-task',
  standalone: true,
  imports: [
    DatePipe
  ],
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
