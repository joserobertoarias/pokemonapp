import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usuarioDTO } from 'src/app/models/usuario_perfil';
import { toBase64 } from 'src/app/utilidades';

@Component({
  selector: 'app-imagen-perfil',
  templateUrl: './imagen-perfil.component.html',
  styleUrls: ['./imagen-perfil.component.css']
})
export class ImagenPerfilComponent implements OnInit {

  form: FormGroup;

  constructor() { }
  imagenBase64: string;

  @Input()
  urlImagenActual: string

  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  @Input()
  usuarioRegistrado: usuarioDTO;

  ngOnInit(): void {
    try {

      if ((this.usuarioRegistrado?.fotoBase64 ?? '').length > 0){
        this.urlImagenActual = this.usuarioRegistrado.fotoBase64;
      }

    } catch (error) {
      
    }

    
  }

  seleccionarImagen(event){
    if (event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: string) => {
        this.imagenBase64 = value;
      })
      .catch(error => console.log(error));  
      
      this.archivoSeleccionado.emit(file); 
      this.urlImagenActual = null;
    }
  }

  removeImage(){
    this.imagenBase64 = null;
  }

}
