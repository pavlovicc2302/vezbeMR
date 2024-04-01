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
    path: 'fun-facts',
    loadChildren: () => import('./fun-facts/fun-facts.module').then( m => m.FunFactsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
