import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewWillLeave,
    ViewDidEnter,
    ViewDidLeave
{
  constructor() {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
  }
  ionViewWillLeave(): void {
    console.log('ionViewWillLeave');
  }
  ionViewDidEnter(): void {
    console.log('ionViewDidEnter');
  }
  ionViewDidLeave(): void {
    console.log('ionViewDidLeave');
  }
}