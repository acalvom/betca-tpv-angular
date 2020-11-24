import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {ProvidersComponent} from './shop/providers/providers.component';
import {ArticlesComponent} from './shop/articles/articles.component';
import {CashierClosedComponent} from './shop/cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './shop/cashier-opened/cashier-opened.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {
    path: 'shop', component: ShopComponent,
    children: [
      {path: 'articles', component: ArticlesComponent},
      {path: 'cashier-closed', component: CashierClosedComponent},
      {path: 'cashier-opened', component: CashierOpenedComponent},
      {path: 'providers', component: ProvidersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
