import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposRoutingModule } from './tipos-routing.module';
import { TiposComponent } from './tipos.component';
import { CreateTipoComponent } from './create-tipo/create-tipo.component';
import { EditTipoComponent } from './edit-tipo/edit-tipo.component';
import { ListTipoComponent } from './list-tipo/list-tipo.component';
import { MaterialModule } from '../material/material.module';
import { FormSubTipoComponent } from './components/form-sub-tipo/form-sub-tipo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTipoComponent } from './components/form-tipo/form-tipo.component';


@NgModule({
  declarations: [
    TiposComponent,
    CreateTipoComponent,
    EditTipoComponent,
    ListTipoComponent,
    FormSubTipoComponent,
    FormTipoComponent
  ],
  imports: [
    CommonModule,
    TiposRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TiposModule { }
