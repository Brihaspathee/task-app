import {
  Component, computed, Input, Signal, signal,
  input, InputSignal, Output, EventEmitter, output, OutputOptions, OutputEmitterRef
} from '@angular/core';
import {User} from "./user.model";


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
  // @Output() select = new EventEmitter<string>();

  user: InputSignal<User> = input.required<User>();
  selected: InputSignal<boolean> = input.required<boolean>();
  // avatar: InputSignal<string> = input.required<string>();
  // name: InputSignal<string> = input.required<string>();
  // id: InputSignal<string> = input.required<string>();
  select: OutputEmitterRef<string>= output<string>()

  // selectedUser = signal(DUMMY_USERS[randomIndex])
  imagePath: Signal<string> = computed(() => 'assets/users/' + this.user().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.avatar
  // }

  onSelectUser(id:string){
    // console.log("Clicked Updated", id);
    // const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
    this.select.emit(id);
  }
}
