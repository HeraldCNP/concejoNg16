import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposRoutingModule } from './tipos-routing.module';
import { TiposComponent } from './tipos.component';
import { CreateTipoComponent } from './create-tipo/create-tipo.component';
import { EditTipoComponent } from './edit-tipo/edit-tipo.component';
import { ListTipoComponent } from './list-tipo/list-tipo.component';


@NgModule({
  declarations: [
    TiposComponent,
    CreateTipoComponent,
    EditTipoComponent,
    ListTipoComponent
  ],
  imports: [
    CommonModule,
    TiposRoutingModule
  ]
})
export class TiposModule { }
