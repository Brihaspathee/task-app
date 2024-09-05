import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import EventEmitter from "node:events";

@Component({
  selector: 'task-root',
  standalone: true,
  imports: [RouterOutlet,
            HeaderComponent,
            UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-app';

  users = DUMMY_USERS;

  onSelectedUser(id: string):void {
    console.log(id);
  }
}
