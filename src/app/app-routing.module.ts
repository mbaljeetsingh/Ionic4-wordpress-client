import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'quotes', loadChildren: './quotes/quotes.module#QuotesPageModule' },
  // { path: 'quote-details', loadChildren: './quote-details/quote-details.module#QuoteDetailsPageModule' },
  // { path: 'edit-quote', loadChildren: './edit-quote/edit-quote.module#EditQuotePageModule' },
  // { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  // { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
