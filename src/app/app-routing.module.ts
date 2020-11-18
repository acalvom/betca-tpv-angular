import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome.component';
import {HomeComponent} from './home/home.component';
import {ProvidersComponent} from './home/providers/providers.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: 'welcome', component: WelcomeComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
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
