import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunFactPage } from './fun-fact.page';

const routes: Routes = [
  {
    path: '',
    component: FunFactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunFactPageRoutingModule {}
