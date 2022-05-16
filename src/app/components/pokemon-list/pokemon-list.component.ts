import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MsgAlertComponent } from '../msg-alert/msg-alert.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  @Input()
  searchTerm ;

  durationInSeconds = 5;

  @Input()
  pokemons: Pokemon[] = [];

  pokemonsSelected:  Pokemon[] = [];

  @Output()
  pokemonsSelectedEmit: EventEmitter<Pokemon[]> =  new EventEmitter<Pokemon[]>();

  constructor(private pokemonService: PokemonService,private _snackBar: MatSnackBar) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    console.log(this.pokemons)

  }

  
  openSnackBar() {
    this._snackBar.openFromComponent(MsgAlertComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  pokemonClicked(event){
    if (event.selected){
      if (this.pokemonsSelected.length < 3){        
        this.pokemonsSelected.push(event);
      } else{
        event.selected = false;
        this.openSnackBar();
      }     
    }else{
      const index = this.pokemonsSelected.indexOf(event, 0)
      if (index > -1){
        this.pokemonsSelected.splice(index, 1);
      }
    }
    this.pokemonsSelectedEmit.emit(this.pokemonsSelected);

  }



}
