import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { usuarioDTO } from 'src/app/models/usuario_perfil';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-registro-pokemons',
  templateUrl: './registro-pokemons.component.html',
  styleUrls: ['./registro-pokemons.component.css']
})
export class RegistroPokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];
  data: Pokemon[] = [];
  imagenBase64: string;
  usuario: usuarioDTO;
  pokemonsSelected: Pokemon[] = [];
  avisoMasde3: string = 'El limite de pokemon en tu equipo son 3!';
  mostrarAviso: boolean = false;
  searchTerm = '';

  constructor(private router: Router, private usuarioService: UsuarioService, private pokemonService: PokemonService) { }

  ngOnInit(): void {


    this.usuarioService.getData("perfil").subscribe(valor => {
      if (valor !== undefined){
        if (valor.fotoBase64 !== undefined){
          this.imagenBase64 = valor.fotoBase64;
          this.usuario = valor;
        }
      }else{
        this.imagenBase64 = null;
      }
    });

    this.pokemonService.getPokemons().subscribe((result: any) => {
      //this.pokemons = result.results;
      //console.log(result.results);
      result.results.forEach(element => {
        this.pokemonService.getPokemonDetails(element.url).subscribe((pokemon: any) => {
          let p = new Pokemon(pokemon, false);      
          this.data.push(p);
        })
      });
    });

    this.pokemons = this.data;


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

  search(value: string): void {
    this.pokemons = this.data.filter(val =>
      val.data.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }



}
