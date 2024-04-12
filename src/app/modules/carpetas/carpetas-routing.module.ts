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


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarpetasRoutingModule { }
