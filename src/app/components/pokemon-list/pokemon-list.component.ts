import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemons: Pokemon[] = [];

  pokemonsSelected:  Pokemon[] = [];

  @Output()
  pokemonsSelectedEmit: EventEmitter<Pokemon[]> =  new EventEmitter<Pokemon[]>();

  constructor(private pokemonService: PokemonService) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    
    this.pokemonService.getPokemons().subscribe((result: any) => {
      //this.pokemons = result.results;
      //console.log(result.results);
      result.results.forEach(element => {
        this.pokemonService.getPokemonDetails(element.url).subscribe((pokemon: any) => {
          let p = new Pokemon(pokemon, false);      
          this.pokemons.push(p);
        })
      });
    })
  }

  pokemonClicked(event){

    if (event.selected){      
      this.pokemonsSelected.push(event);
    }else{
      const index = this.pokemonsSelected.indexOf(event, 0)
      if (index > -1){
        this.pokemonsSelected.splice(index, 1);
      }
    }
    this.pokemonsSelectedEmit.emit(this.pokemonsSelected);

  }

}
