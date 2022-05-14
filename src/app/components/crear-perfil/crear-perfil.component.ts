import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioDTO } from 'src/app/models/usuario_perfil';
import { UsuarioService } from 'src/app/services/usuario.service';
import { toBase64 } from 'src/app/utilidades';

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router){}
  ngOnInit(): void {
    this.usuarioService.removeData();
  }

  guardarPerfil(perfil: usuarioDTO):void {
  
    this.usuarioService.crear(perfil);
     this.router.navigate(['/seleccionar']);

  }


}
