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

  onEditQuote(quote: Quote){
    this.router.navigate(
      ['quotes',quote.id,'edit'], 
      {queryParams:{text:quote.text, author:quote.author}}
    );

    /* Mi smo u quotes.component.html prolazi kroz listu citata, i onda smo u okviru metode onEditQuote() prosledili podatke o onom citatu na koji smo kliknuli. 
    Kada kliknemo na taj citat odlazi se na putanju localhost:4200/quotes/id_kliknutog_citata/edit 

    Preko queryParams smo obezbedili da se u adress bar-u cuvaju podaci iz tog citata tj text i author
    Te queryParams cemo iskoristiti da popunimo polja forme 

    npr: localhost:4200/quotes/q1/edit/?text=Meet%20me%20at%20midnight!&author=Taylor%20Swift

    %20 oznacava razmak 

    */
  }
}
