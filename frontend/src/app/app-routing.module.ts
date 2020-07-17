import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RmComponent } from './rm/rm.component';
import { RsComponent } from './rs/rs.component';
import { MainComponent } from './main/main.component';
import { MachinesComponent } from './rm/machines/machines.component';
import {EquipmentsComponent} from './rm/equipments/equipments.component'
import {StockComponent} from './rm/stock/stock.component'
import {WorkorderComponent} from './rm/workorder/workorder.component'
import {CreateaccountComponent} from './rm/createaccount/createaccount.component'



const routes: Routes = [
  {
    path: 'director',
    component: RmComponent,
  },
  { path: 'responsable', component: RsComponent },
  { path: '', component: MainComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'equipments', component: EquipmentsComponent },
  { path: 'stock', component: StockComponent },
  { path: 'workorder', component: WorkorderComponent },
  { path: 'create', component: CreateaccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}