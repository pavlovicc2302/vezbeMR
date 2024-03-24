import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote.model';
import { QuoteService } from '../quotes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent{
  
  quotes: Quote[];
  constructor(private quotesService:QuoteService, private router: Router){
    this.quotes=this.quotesService.quotes;
  }
  

  onAddQuote(){
    // kada se klikne na dugme, onda treba da se ode na putanju /quotes/new
    // koju smo definisali u app-routing.module.ts i onda da se prikaze forma za kreiranje novog citata
    this.router.navigateByUrl('/quotes/new');
  }

}
