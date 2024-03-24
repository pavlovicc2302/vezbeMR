import { Quote } from "./quote.model"

export class QuoteService{
    quotes: Quote[] =[
        new Quote('q1','Meet me at midnight!','Taylor Swift'),
        new Quote('q2','One single thread of gold tied me to you.','Taylor Swift')
      ];

      addQuote(quote:Quote){
        this.quotes.push(quote);
      }

}