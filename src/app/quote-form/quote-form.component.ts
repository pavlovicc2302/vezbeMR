import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Quote } from '../quote.model';
import { QuoteService } from '../quotes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.css',
})
export class QuoteFormComponent implements OnInit {
  text = 'quotee';
  author = 'author';
  fullQuote = 'full quote';
  @Output() addedQuote = new EventEmitter<Quote>();

  // nece moci da se klikne na dugme
  turnOff(): boolean {
    return true;
  }

  // kada korisnik krene da kuca ime autora, odmah se menja i ime autora u quote-Author
  // onChangeOfAuthor(event:Event){
  //   this.author = (event.target as HTMLInputElement).value;
  // }

  constructor(
    private quotesService: QuoteService,
    private route: ActivatedRoute
  ) {
    // ActivatedRoute nam omogucava pristup podacima trenutno aktivirane ruti
  }
  ngOnInit(): void {
    // ngOnInit se uvek pokrece na pocetku tj kada se inicijalizuje komponenta
    // Pri inicijalizaciji komponente QuoteForm ucitavamo podatke iz queryParams

    // snapshot nam daje inicijalnu vrednost tih queryParametara
    this.text = this.route.snapshot.queryParams['text'];
    this.author = this.route.snapshot.queryParams['author'];

    // ako ostavimo samo gornje dve linije koda, onda ce se polja u formi promeniti samo jednom, tj ako kliknemo na prvi citat, polja u formi ce se popuniti sa podacima o tom citatu, ali ako nakon toga kliknemo na drugi citat, onda se podaci u formi NECE promeniti 
    // ovo se desava zato sto smo mi vec inicijalizovali komponentu prvim klikom tj ngOnInit() je vec izvrsen i nece se on ponovo izvrsavati 

    // **** OBSERVABLE ****
    // Mi cemo se tzv 'pretplatiti' na queryParams (Observable) odnosno mi cemo odreagovati svaki put kada dodje do promene queryParams (promena se desava u address bar-u kada kliknemo na odredjeni citat)
    // Sada smo omogucili da se polja forme menjaju kad god kliknemo na citat, a ne samo prvi put

    this.route.queryParams.subscribe((queryParams: Params) => {
      // svaki puta kada se promene queryParams, izvrsavaca se ove dve linije koda
      this.text = queryParams['text'];
      this.author = queryParams['author'];
    });
  }

  // klikom na dugme Add quote! menja se fullQuote
  // `` se koriste za spajanje promenljivih - rezultat je string koji se upisuje u fullQuote
  onAddQuote() {
    this.fullQuote = `'${this.text}' - ${this.author}`;

    // I nacin - dodavanje novog citata preko EventEmitter-a
    // this.addedQuote.emit(new Quote(this.text,this.author));

    // II nacin - dodavanje novog citata preko servisa (Dependency Injection)
    this.quotesService.addQuote(new Quote('q3', this.text, this.author));
  }
}
