import {Component, Input, input, InputSignal} from '@angular/core';
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'task-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() id !: string;

  name:InputSignal<string|undefined>= input<string>();
}
