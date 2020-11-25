import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import {CashierClosedComponent} from './cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './cashier-opened/cashier-opened.component';
import {ProvidersComponent} from './providers/providers.component';
import {ShopComponent} from './shop.component';
import {TicketsComponent} from './cashier-opened/tickets/tickets.component';

const routes: Routes = [
  {
    path: '', component: ShopComponent, // 'shop' to forRoot
    children: [ // or path: shop/articles
      {path: 'articles', component: ArticlesComponent},
      {path: 'cashier-closed', component: CashierClosedComponent},
      {path: 'cashier-opened', component: CashierOpenedComponent},
      {path: 'providers', component: ProvidersComponent},
      {path: 'tickets', component: TicketsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // forRoot to eager load
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
