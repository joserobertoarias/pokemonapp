import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { usuarioDTO } from 'src/app/models/usuario_perfil';
import { UsuarioService } from 'src/app/services/usuario.service';
import { toBase64 } from 'src/app/utilidades';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {


  imagenBase64: string;
  usuario: usuarioDTO;
  pokemonsSelected: Pokemon[] = [];

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
    this.pokemonsSelected = event;
    console.log(event);
  }

}
