import { Component } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quotes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [QuoteService]
})
export class AppComponent {
  title = 'vezbe-app';

  show = true;

  
}
