import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MedioDePagoService } from './medioDePago.service';
import { MedioDePagoListComponent } from './medioDePago-list/medioDePago-list.component';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { PseModule } from './pse/pse.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TarjetaModule,
    PseModule
  ],
  declarations: [MedioDePagoListComponent],
  providers: [MedioDePagoService],
  exports: [MedioDePagoListComponent]
})
export class MedioDePagoModule { }