import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-mi-poke-card',
  templateUrl: './mi-poke-card.component.html',
  styleUrls: ['./mi-poke-card.component.css']
})
export class MiPokeCardComponent implements OnInit {
  
  @Input()
  pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
    
  }

}
