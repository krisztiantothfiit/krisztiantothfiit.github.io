import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirConditionerComponent } from './air-conditioner/air-conditioner.component';
import { AirPumpComponent } from './air-pump/air-pump.component';
import { HomeComponent } from './home/home.component';
import { RecoveryComponent } from './recovery/recovery.component';

const routes: Routes = [
  { path: 'klimatizacia', component: AirConditionerComponent },
  { path: 'tepelne-cerpadlo', component: AirPumpComponent },
  { path: 'rekuperacia', component: RecoveryComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
