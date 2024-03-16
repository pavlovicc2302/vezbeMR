import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.css'
})
export class QuoteFormComponent {

  text='quote';
  author='author';
  fullQuote='full quote';

  // nece moci da se klikne na dugme
  turnOff():boolean{
    return true;
  }

  // kada korisnik krene da kuca ime autora, odmah se menja i ime autora u quote-Author
  onChangeOfAuthor(event:Event){
    this.author = (event.target as HTMLInputElement).value;
  }
}
