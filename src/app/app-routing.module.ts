import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { MisPokemonesComponent } from './components/mis-pokemones/mis-pokemones.component';
import { RegistroPokemonsComponent } from './components/registro-pokemons/registro-pokemons.component';

const routes: Routes = [
  {path: '', component: CrearPerfilComponent},
  {path: 'index',component: CrearPerfilComponent},
  {path: 'loading', component: LoadingPageComponent},
  {path: 'seleccionar', component: RegistroPokemonsComponent},
  {path: 'milista', component: MisPokemonesComponent},
  {path: 'editar', component: EditarPerfilComponent},
  {path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

