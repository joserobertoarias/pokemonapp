import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  constructor() { }

  @Input()
  pokemon: Pokemon;

  @Input()
  indice: number;

  @Output()
  pokemonClicked: EventEmitter<Pokemon> =  new EventEmitter<Pokemon>();


  ngOnInit(): void {

  }

  formatIndice(indice):string {
     return (indice.toString()).padStart(3,'0');
  }
  selectPokemon(){
    if (this.pokemon.selected){
      this.pokemon.selected = false;
    }else{
      this.pokemon.selected = true;
    }
    this.pokemonClicked.emit(this.pokemon);

  }

}
