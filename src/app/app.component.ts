import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import EventEmitter from "node:events";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'task-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-app';

  users = DUMMY_USERS;

  selectedUserId?: string;

  get selectedUser():{id:string, name: string, avatar: string} | undefined{
    return this.users.find((user) => user.id === this.selectedUserId)
  }

  onSelectedUser(id: string):void {
    console.log(id);
    this.selectedUserId = id;
  }
}
