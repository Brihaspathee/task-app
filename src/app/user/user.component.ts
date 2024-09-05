import {Component, computed, Input, Signal, signal, input, InputSignal} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'task-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Input({required:true}) id!: string;

  avatar: InputSignal<string> = input.required<string>();
  name: InputSignal<string> = input.required<string>();
  id: InputSignal<string> = input.required<string>();

  // selectedUser = signal(DUMMY_USERS[randomIndex])
  imagePath: Signal<string> = computed(() => 'assets/users/' + this.avatar())

  // get imagePath() {
  //   return 'assets/users/' + this.avatar
  // }

  onSelectUser(id:string){
    // console.log("Clicked Updated", id);
    // const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
