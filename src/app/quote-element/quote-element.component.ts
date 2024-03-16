import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-element',
  templateUrl: './quote-element.component.html',
  styleUrl: './quote-element.component.css'
})
export class QuoteElementComponent {
  @Input() text='Long story short, I survived';
  @Input() author = 'Taylor Swift'

}
