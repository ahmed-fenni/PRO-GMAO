import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RmComponent } from './rm/rm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RsComponent } from './rs/rs.component';
import { MainComponent } from './main/main.component';
import { MachinesComponent } from './rm/machines/machines.component';
import { EquipmentsComponent } from './rm/equipments/equipments.component';
import { StockComponent } from './rm/stock/stock.component';
import { WorkorderComponent } from './rm/workorder/workorder.component';
import { CreateaccountComponent } from './rm/createaccount/createaccount.component';
import { WorkOrderComponent } from './rm/workorder/work-order/work-order.component';
import { AddComponent } from './rm/workorder/add/add.component';
import { EnQueueComponent } from './rm/workorder/en-queue/en-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    RmComponent,
    NavbarComponent,
    RsComponent,
    MainComponent,
    MachinesComponent,
    EquipmentsComponent,
    StockComponent,
    WorkorderComponent,
    CreateaccountComponent,
    WorkOrderComponent,
    AddComponent,
    EnQueueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
