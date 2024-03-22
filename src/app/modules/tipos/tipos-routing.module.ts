import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposComponent } from './tipos.component';
import { CreateTipoComponent } from './create-tipo/create-tipo.component';
import { EditTipoComponent } from './edit-tipo/edit-tipo.component';
import { ListTipoComponent } from './list-tipo/list-tipo.component';

const routes: Routes = [
  {
    path: '',
    component: TiposComponent,
    children: [
      {
        path: 'register', component: CreateTipoComponent
      },
      {
        path: 'edit/:id', component: EditTipoComponent
      },
      {
        path: 'list', component: ListTipoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposRoutingModule { }
