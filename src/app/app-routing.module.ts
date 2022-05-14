import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { MisPokemonesComponent } from './components/mis-pokemones/mis-pokemones.component';

const routes: Routes = [
  {path: '', component: CrearPerfilComponent},
  {path: 'loading', component: LoadingPageComponent},
  {path: 'editar', component: EditarPerfilComponent},
  {path: 'milista', component: MisPokemonesComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

