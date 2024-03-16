import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-form-task-element',
  templateUrl: './form-task-element.component.html',
  styleUrl: './form-task-element.component.css'
})
export class FormTaskElementComponent {
  @Input() title="";
  @Input() description="";
  @Input() priority="";
}
