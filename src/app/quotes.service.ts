import { Quote } from "./quote.model"

export class QuoteService{
    quotes: Quote[] =[
        new Quote('Meet me at midnight!','Taylor Swift'),
        new Quote('One single thread of gold tied me to you.','Taylor Swift')
      ];

      addQuote(quote:Quote){
        this.quotes.push(quote);
      }

}