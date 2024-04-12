import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarpetasRoutingModule } from './carpetas-routing.module';
import { CarpetasComponent } from './carpetas.component';
import { ListCarpetaComponent } from './list-carpeta/list-carpeta.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCarpetaComponent } from './components/form-carpeta/form-carpeta.component';
import { CreateResolucionComponent } from './archivos/resoluciones/create-resolucion/create-resolucion.component';
import { ListResolucionComponent } from './archivos/resoluciones/list-resolucion/list-resolucion.component';
import { UpdateResolucionComponent } from './archivos/resoluciones/update-resolucion/update-resolucion.component';
import { SidebarMenuComponent } from 'src/app/_metronic/layout/components/sidebar/sidebar-menu/sidebar-menu.component';
import { CreateLeyComponent } from './archivos/leyes/create-ley/create-ley.component';
import { ListLeyComponent } from './archivos/leyes/list-ley/list-ley.component';
import { UpdateLeyComponent } from './archivos/leyes/update-ley/update-ley.component';
import { VerCarpetaComponent } from './archivos/components/ver-carpeta/ver-carpeta.component';


@NgModule({
  declarations: [
    CarpetasComponent,
    ListCarpetaComponent,
    FormCarpetaComponent,
    CreateResolucionComponent,
    ListResolucionComponent,
    UpdateResolucionComponent,
    CreateLeyComponent,
    ListLeyComponent,
    UpdateLeyComponent,
    VerCarpetaComponent
  ],
  imports: [
    CommonModule,
    CarpetasRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    SidebarMenuComponent
  ]
})
export class CarpetasModule { }
