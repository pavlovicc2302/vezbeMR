import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

const routes: Routes = [
  // definisemo putanju tj rutu u koja komponenta treba da se prikaze na toj putanji



  // na home putanji/ruti zelimo da se otvori Home komponenta
  {path:'', component:HomeComponent},

  // na quotes putanji/ruti zelimo da se otvori Quotes komponenta
  // children oznacava podrute date rute, tako da cemo imati npr rutu quotes/new
  {path:'quotes',component:QuotesComponent, 
  children:[{
    path:'new',component:QuoteFormComponent
  }]},

  // na fun-facts putanji/ruti zelimo da se otvori FunFacts komponenta
  {path:'fun-facts', component:FunFactsComponent}
];

// konfiguracija route modula
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
