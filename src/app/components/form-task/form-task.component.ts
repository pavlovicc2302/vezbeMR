import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent {

  title="";
  description="";
  priority=""
  selectedPriority="low"
  success = true;
  status="Status:"
  @Output() addedTask = new EventEmitter<Task>();

  
  onPriorityChange(){
    this.priority = this.selectedPriority;
  }

  onSaveTask(){
    if(!this.title || !this.description || !this.priority){
      this.success = false;
      this.status = "Status: Morate popuniti sva polja."
    }else{
      // this.tasksService.addTask(new Task(this.title,this.description,this.description));
      this.success = true;
      this.status = "Status: Task sacuvan"
      this.addedTask.emit(new Task(this.title,this.description,this.priority));
      
    }
  }

  
}
