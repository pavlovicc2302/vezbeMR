import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunFactPageRoutingModule } from './fun-fact-routing.module';

import { FunFactPage } from './fun-fact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunFactPageRoutingModule
  ],
  declarations: [FunFactPage]
})
export class FunFactPageModule {}
