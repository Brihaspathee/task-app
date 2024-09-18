import { Injectable } from '@angular/core';
import {Task} from "./task/task.model";
import {NewTask} from "./new-task/new-task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

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

  getUserTasks(userId: string):Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task:NewTask, userId: string):void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
      userId: userId
    })
  }

  removeTask(id:string):void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
