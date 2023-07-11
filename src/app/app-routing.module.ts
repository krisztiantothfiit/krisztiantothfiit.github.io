import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrunchComponent } from './brunch/brunch.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DrinksComponent } from './drinks/drinks.component';
import { UsComponent } from './us/us.component';

const routes: Routes = [
  { path: 'brunch', component: BrunchComponent },
  { path: 'obed', component: LunchComponent },
  { path: 'vecera', component: DinnerComponent },
  { path: 'drinky', component: DrinksComponent },
  { path: 'my', component: UsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
