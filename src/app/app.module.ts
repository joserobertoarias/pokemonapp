import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagenPerfilComponent } from './components/imagen-perfil/imagen-perfil.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroPokemonsComponent } from './components/registro-pokemons/registro-pokemons.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { FormularioPerfilComponent } from './components/formulario-perfil/formulario-perfil.component';
import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { MisPokemonesComponent } from './components/mis-pokemones/mis-pokemones.component';
import { MiPokeCardComponent } from './components/mi-poke-card/mi-poke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenPerfilComponent,
    CabeceraComponent,
    PokemonListComponent,
    RegistroPokemonsComponent,
    LoadingPageComponent,
    FormularioPerfilComponent,
    CrearPerfilComponent,
    EditarPerfilComponent,
    PokeCardComponent,
    MisPokemonesComponent,
    MiPokeCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
