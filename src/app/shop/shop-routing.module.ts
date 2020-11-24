import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import {CashierClosedComponent} from './cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './cashier-opened/cashier-opened.component';
import {ProvidersComponent} from './providers/providers.component';

const routes: Routes = [
  {path: 'shop/articles', component: ArticlesComponent},
  {path: 'shop/cashier-closed', component: CashierClosedComponent},
  {path: 'shop/cashier-opened', component: CashierOpenedComponent},
  {path: 'shop/providers', component: ProvidersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
