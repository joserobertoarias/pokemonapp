import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { usuarioDTO } from 'src/app/models/usuario_perfil';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {


  imagenBase64: string;
  usuario: usuarioDTO;
  pokemonsSelected: Pokemon[] = [];

  constructor(private router: Router, private usuarioService: UsuarioService, private dataSharingService:DataSharingService) { }

  ngOnInit(): void {


    this.usuarioService.getData("perfil").subscribe(valor => {
      if (valor !== null){
        if (valor.fotoBase64 !== undefined){
          this.imagenBase64 = valor.fotoBase64;
          this.usuario = valor;
          this.dataSharingService.PhotoBase64.next(valor.fotoBase64);
        }
      }else{
        this.imagenBase64 = null;
        this.router.navigate(['']);
      }
    });


  

  }

  guardarPerfil(perfil: usuarioDTO):void {
  
    this.usuarioService.editar(perfil);
     this.router.navigate(['/seleccionar']);

  }

}
