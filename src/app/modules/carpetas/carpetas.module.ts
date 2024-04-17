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
import { CreateCorrespondenciaComponent } from './archivos/correspondencias/create-correspondencia/create-correspondencia.component';
import { ListCorrespondenciaComponent } from './archivos/correspondencias/list-correspondencia/list-correspondencia.component';
import { UpdateCorrespondenciaComponent } from './archivos/correspondencias/update-correspondencia/update-correspondencia.component';
import { CreateConvocatoriaComponent } from './archivos/convocatorias/create-convocatoria/create-convocatoria.component';
import { ListConvocatoriaComponent } from './archivos/convocatorias/list-convocatoria/list-convocatoria.component';
import { UpdateConvocatoriaComponent } from './archivos/convocatorias/update-convocatoria/update-convocatoria.component';
import { CreatePeticionComponent } from './archivos/peticiones/create-peticion/create-peticion.component';
import { ListPeticionComponent } from './archivos/peticiones/list-peticion/list-peticion.component';
import { UpdatePeticionComponent } from './archivos/peticiones/update-peticion/update-peticion.component';
import { CreateMinutaComponent } from './archivos/minutas/create-minuta/create-minuta.component';
import { ListMinutaComponent } from './archivos/minutas/list-minuta/list-minuta.component';
import { UpdateMinutaComponent } from './archivos/minutas/update-minuta/update-minuta.component';
import { CreateInfComisionComponent } from './archivos/infComisiones/create-inf-comision/create-inf-comision.component';
import { ListInfComisionComponent } from './archivos/infComisiones/list-inf-comision/list-inf-comision.component';
import { UpdateInfComisionComponent } from './archivos/infComisiones/update-inf-comision/update-inf-comision.component';
import { CreateInFiscalizacionComponent } from './archivos/inFiscalizaciones/create-in-fiscalizacion/create-in-fiscalizacion.component';
import { ListInFiscalizacionComponent } from './archivos/inFiscalizaciones/list-in-fiscalizacion/list-in-fiscalizacion.component';
import { UpdateInFiscalizacionComponent } from './archivos/inFiscalizaciones/update-in-fiscalizacion/update-in-fiscalizacion.component';
import { CreateCronogramaComponent } from './archivos/cronogramas/create-cronograma/create-cronograma.component';
import { ListCronogramaComponent } from './archivos/cronogramas/list-cronograma/list-cronograma.component';
import { UpdateCronogramaComponent } from './archivos/cronogramas/update-cronograma/update-cronograma.component';


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
    VerCarpetaComponent,
    CreateCorrespondenciaComponent,
    ListCorrespondenciaComponent,
    UpdateCorrespondenciaComponent,
    CreateConvocatoriaComponent,
    ListConvocatoriaComponent,
    UpdateConvocatoriaComponent,
    CreatePeticionComponent,
    ListPeticionComponent,
    UpdatePeticionComponent,
    CreateMinutaComponent,
    ListMinutaComponent,
    UpdateMinutaComponent,
    CreateInfComisionComponent,
    ListInfComisionComponent,
    UpdateInfComisionComponent,
    CreateInFiscalizacionComponent,
    ListInFiscalizacionComponent,
    UpdateInFiscalizacionComponent,
    CreateCronogramaComponent,
    ListCronogramaComponent,
    UpdateCronogramaComponent
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
