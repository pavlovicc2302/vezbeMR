import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quotes',
    pathMatch: 'full'
  },
  {
    path: 'quotes',
    loadChildren: () => import('./quotes/quotes.module').then( m => m.QuotesPageModule)
  },
  {
    path: 'fun-fact',
    loadChildren: () => import('./fun-fact/fun-fact.module').then( m => m.FunFactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
