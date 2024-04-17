import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpetasComponent } from './carpetas.component';
import { ListCarpetaComponent } from './list-carpeta/list-carpeta.component';
import { CreateResolucionComponent } from './archivos/resoluciones/create-resolucion/create-resolucion.component';
import { ListResolucionComponent } from './archivos/resoluciones/list-resolucion/list-resolucion.component';
import { UpdateResolucionComponent } from './archivos/resoluciones/update-resolucion/update-resolucion.component';
import { CreateLeyComponent } from './archivos/leyes/create-ley/create-ley.component';
import { ListLeyComponent } from './archivos/leyes/list-ley/list-ley.component';
import { UpdateLeyComponent } from './archivos/leyes/update-ley/update-ley.component';
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

const routes: Routes = [
  {
    path: '',
    component: CarpetasComponent,
    children: [
      {
        path: 'list/:flag', component: ListCarpetaComponent
      },
      { path: 'createResolucion/:id', component: CreateResolucionComponent },
      { path: 'listResolucion/:id', component: ListResolucionComponent },
      { path: 'updateResolucion/:id', component: UpdateResolucionComponent },

      { path: 'createLey/:id', component: CreateLeyComponent },
      { path: 'listLey/:id', component: ListLeyComponent },
      { path: 'updateLey/:id', component: UpdateLeyComponent },

      { path: 'createCorrespondencia/:id', component: CreateCorrespondenciaComponent },
      { path: 'listCorrespondencia/:id', component: ListCorrespondenciaComponent },
      { path: 'updateCorrespondencia/:id', component: UpdateCorrespondenciaComponent },

      { path: 'createConvocatoria/:id', component: CreateConvocatoriaComponent },
      { path: 'listConvocatoria/:id', component: ListConvocatoriaComponent },
      { path: 'updateConvocatoria/:id', component: UpdateConvocatoriaComponent },

      { path: 'createPeticion/:id', component: CreatePeticionComponent },
      { path: 'listPeticion/:id', component: ListPeticionComponent },
      { path: 'updatePeticion/:id', component: UpdatePeticionComponent },

      { path: 'createMinuta/:id', component: CreateMinutaComponent },
      { path: 'listMinuta/:id', component: ListMinutaComponent },
      { path: 'updateMinuta/:id', component: UpdateMinutaComponent },

      { path: 'createInfComision/:id', component: CreateInfComisionComponent },
      { path: 'listInfComision/:id', component: ListInfComisionComponent },
      { path: 'updateInfComision/:id', component: UpdateInfComisionComponent },

      { path: 'createInFiscalizacion/:id', component: CreateInFiscalizacionComponent },
      { path: 'listInFiscalizacion/:id', component: ListInFiscalizacionComponent },
      { path: 'updateInFiscalizacion/:id', component: UpdateInFiscalizacionComponent },

      { path: 'createCronograma/:id', component: CreateCronogramaComponent },
      { path: 'listCronograma/:id', component: ListCronogramaComponent },
      { path: 'updateCronograma/:id', component: UpdateCronogramaComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarpetasRoutingModule { }
