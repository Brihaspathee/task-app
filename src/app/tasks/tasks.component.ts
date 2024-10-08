import {Component, Input, input, InputSignal} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {Task} from "./task/task.model";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTask} from "./new-task/new-task.model";

@Component({
  selector: 'task-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId !: string;

  name:InputSignal<string|undefined>= input<string>();

  isAddingTask: boolean = false;

  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build First Prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare Issue Template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15'
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Prepare Issue Template task',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15'
    }
  ]

  get selectedUserTasks():Task[] | undefined {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string):void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask():void {
    this.isAddingTask = true;
  }

  onCancelAddTask():void {
    this.isAddingTask = false;
  }

  onAddNewTask(task: NewTask):void {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
      userId: this.userId
    });
    this.isAddingTask = false;
  }
}
