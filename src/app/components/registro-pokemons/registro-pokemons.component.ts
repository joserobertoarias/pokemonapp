import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { usuarioDTO } from 'src/app/models/usuario_perfil';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-registro-pokemons',
  templateUrl: './registro-pokemons.component.html',
  styleUrls: ['./registro-pokemons.component.css']
})
export class RegistroPokemonsComponent implements OnInit {


  imagenBase64: string;
  usuario: usuarioDTO;
  pokemonsSelected: Pokemon[] = [];
  avisoMasde3: string = 'El limite de pokemon en tu equipo son 3!';
  mostrarAviso: boolean = false;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.getData("perfil").subscribe(valor => {
      if (valor !== undefined){
        if (valor.fotoBase64 !== undefined){
          console.log(valor);
          this.imagenBase64 = valor.fotoBase64;
          this.usuario = valor;
        }
      }else{
        this.imagenBase64 = null;
      }
    });


  }

  guardar(){
    this.usuarioService.guardarMisPokemones(this.pokemonsSelected);
    this.router.navigate(['/milista']);

  }
  archivoSeleccionado(file){

  }

  pokemonSelecteds(event){
    if (event?.length <= 3){    
      this.pokemonsSelected = event;
    }
  }





}
