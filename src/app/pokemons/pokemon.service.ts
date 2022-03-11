import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PagedData } from '../models/pages-data.model';
import { PokemonDetails } from '../models/pokemon-details.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  getPokemons(offset:number): Observable<PagedData>{
    return this.http.get<PagedData>('http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons?offset='+offset+'&limit=20');
  }

  getPokemon(id: number): Observable<PokemonDetails | undefined> {
    return this.http.get<PokemonDetails>('http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons/'+id);
  }

  getPokemonSearch(idOrName: string): Observable<PagedData> {
    return this.http.get<PagedData>('http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons?search='+idOrName);
  }
}
