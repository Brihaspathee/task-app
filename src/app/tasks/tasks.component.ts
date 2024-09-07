import {Component, Input, input, InputSignal} from '@angular/core';

@Component({
  selector: 'task-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() id !: string;

  name:InputSignal<string|undefined>= input<string>();
}
