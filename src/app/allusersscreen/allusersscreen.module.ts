import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenbuttonsComponent } from './screenbuttons/screenbuttons.component';
import { ScreenoneComponent } from './screenone/screenone.component';
import { ScreentwoComponent } from './screentwo/screentwo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';
import { BilldialogueComponent } from './billdialogue/billdialogue.component';
import { ConfirmedpopupComponent } from './tickets/confirmedpopup/confirmedpopup.component';





export const routes = [
  { path:'', redirectTo:'screen-buttons', pathMatch:'full'},
  { path: 'screen-buttons', component:ScreenbuttonsComponent},
  { path: 'screen-one', component:ScreenoneComponent},
  { path: 'screen-two', component: ScreentwoComponent},
  { path:'tickets' , component:TicketsComponent},
  {path:'bill' , component:BilldialogueComponent}
];


@NgModule({
  declarations: [
    ScreenbuttonsComponent,
    ScreenoneComponent,
    ScreentwoComponent,
    TicketsComponent,
    BilldialogueComponent,
    ConfirmedpopupComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[BilldialogueComponent,ConfirmedpopupComponent]
})
export class AllusersscreenModule { }
