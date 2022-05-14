import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { usuarioDTO } from '../models/usuario_perfil';
import { getBase64Image, toBase64 } from '../utilidades';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }


  public crear(usuario: usuarioDTO){
    localStorage.removeItem("perfil");
    localStorage.removeItem("imagenPerfil");

    toBase64(usuario.foto).then((value: string) => {
      usuario.fotoBase64 = value;
      localStorage.setItem("imagenPerfil", value);
      this.saveData("perfil",usuario);
    })
    .catch(error => console.log(error));

  }


  saveData(key:string,value:usuarioDTO){
    localStorage.setItem(key,JSON.stringify(value));
  }

  getData(key:string): Observable<usuarioDTO>{
    const usuario = of(JSON.parse(localStorage.getItem(key)));
    return usuario;
   }

   removeData():void{
    localStorage.removeItem("perfil");
    localStorage.removeItem("imagenPerfil");
   }

   guardarMisPokemones(lista: Pokemon[]){     
     localStorage.setItem("milista",JSON.stringify(lista));
   }

   obtenerMisPokemones(): Observable<Pokemon[]>{
     const list = of(JSON.parse(localStorage.getItem("milista")));
     return list;
   }





}
