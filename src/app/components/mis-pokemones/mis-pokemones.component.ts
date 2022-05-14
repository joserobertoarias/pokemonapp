import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { usuarioDTO } from 'src/app/models/usuario_perfil';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-pokemones',
  templateUrl: './mis-pokemones.component.html',
  styleUrls: ['./mis-pokemones.component.css']
})
export class MisPokemonesComponent implements OnInit {

  imagenBase64: string;
  usuario: usuarioDTO;
  pokemonsSelected: Pokemon[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

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

    this.usuarioService.obtenerMisPokemones().subscribe(list => {
      this.pokemonsSelected = list;
    });


  }

  archivoSeleccionado(file){

  }

  goToEdiarPerfil(){
    this.router.navigate([('/editar')]);
  }


}
