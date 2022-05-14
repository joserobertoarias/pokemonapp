import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiURL = environment.apiURL;


  constructor(private http: HttpClient) { 
   }

   getPokemons(){
     return this.http.get(`${this.apiURL}/pokemon?limit=9`);
   }

   getPokemonDetails(url: string){
     return this.http.get(url);
   }


}
