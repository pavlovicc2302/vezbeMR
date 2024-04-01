import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewWillEnter, ViewWillLeave, ViewDidEnter, ViewDidLeave } from '@ionic/angular';

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.page.html',
  styleUrls: ['./fun-facts.page.scss'],
})
export class FunFactsPage
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
    console.log('ngOnInit');
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
