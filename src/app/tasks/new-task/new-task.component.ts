import {Component, output, OutputEmitterRef, signal, WritableSignal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTask} from "./new-task.model";

@Component({
  selector: 'task-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  cancel: OutputEmitterRef<void>= output<void>();
  addTask: OutputEmitterRef<NewTask> = output<NewTask>();

  enteredTitle: WritableSignal<string> = signal('');
  enteredSummary: WritableSignal<string> = signal('');
  enteredDate: WritableSignal<string> = signal('');

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(): void {
    this.addTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    })
  }
}
