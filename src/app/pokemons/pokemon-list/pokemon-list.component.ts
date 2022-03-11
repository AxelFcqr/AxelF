import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Output() pokemonSelected = new EventEmitter<number>();
  offset = 0;
  pokemons?: Pokemon[];
  text: string= "";


  constructor(private servicePoke: PokemonService) { }



  ngOnInit(): void {
    this.getPokemons();
  }
  onPokemonSelected(id: number) {
    this.pokemonSelected.emit(id);
  }
  getPokemons(){
    this.servicePoke.getPokemons(this.offset).subscribe(result => this.pokemons = result.data);
  }
  onScroll(ev:any) {
    this.offset = this.offset + 20;
    this.servicePoke.getPokemons(this.offset).subscribe(result => this.pokemons = this.pokemons?.concat(result.data));
    
  }
  searchPoke(): void{
    
    if(this.text)
      this.servicePoke.getPokemonSearch(this.text).subscribe(result => this.pokemons = result.data);
    else
      this.servicePoke.getPokemons(0).subscribe(result => this.pokemons = result.data);
  }
  
}
