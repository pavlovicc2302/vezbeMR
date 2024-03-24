import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { QuoteElementComponent } from './quote-element/quote-element.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteFormComponent,
    QuoteElementComponent,
    HomeComponent,
    QuotesComponent,
    FunFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
