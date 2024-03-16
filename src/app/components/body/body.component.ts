import { Component } from '@angular/core';
import { Task } from '../../task.model';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  

  tasks: Task[] = [];

  addTask(task:Task){
    this.tasks.push(task);
  }
}
