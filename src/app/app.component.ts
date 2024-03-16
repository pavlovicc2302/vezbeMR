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

  
  // quotes: Quote[] =[
  //   new Quote('Meet me at midnight!','Taylor Swift'),
  //   new Quote('One single thread of gold tied me to you.','Taylor Swift')
  // ]

  //addQuote(quote:Quote){
   // this.quotes.push(quote);
  //}

  constructor(private quotesService:QuoteService){

  }

  quotes: Quote[] = this.quotesService.quotes;

  addQuote(quote:Quote){
    this.quotes.push(quote);
  }

  show = true;

  
}
