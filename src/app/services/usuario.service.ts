import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { usuarioDTO } from '../models/usuario_perfil';
import { getBase64Image, toBase64 } from '../utilidades';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usr: usuarioDTO =  {
    nombre: '',
    pasatiempo: [],
    cumpleanios: null,
    documento: '',
    foto: null,
    fotoBase64: '',
    edad: 0 
  };

  private usuario = new BehaviorSubject<usuarioDTO>(this.usr);

  public customUsuario = this.usuario.asObservable();

  constructor() { }


  public crear(usuario: usuarioDTO){
    this.removeData();

    toBase64(usuario.foto).then((value: string) => {
      usuario.fotoBase64 = value;
      localStorage.setItem("imagenPerfil", value);
      this.saveData("perfil",usuario);
      console.log(usuario);
      this.usuario.next(usuario);
    })
    .catch(error => console.log(error));

  }

  public editar(usuario: usuarioDTO){
    
    localStorage.removeItem("perfil");

    this.saveData("perfil",usuario);

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
    localStorage.removeItem("milista");
   }

   guardarMisPokemones(lista: Pokemon[]){     
     localStorage.setItem("milista",JSON.stringify(lista));
   }

   obtenerMisPokemones(): Observable<Pokemon[]>{
     const list = of(JSON.parse(localStorage.getItem("milista")));
     return list;
   }





}
