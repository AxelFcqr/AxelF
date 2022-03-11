import { Location } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from 'src/app/models/pokemon-details.model';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {
  @Input() idPokemon?: number;
  pokemon?: PokemonDetails;
  
  constructor(public pokemonService: PokemonService, private route: ActivatedRoute, private location: Location) { }

  ngOnChanges(): void {
    this.getPokemon();
  }
  
  getPokemon():void{    
    this.pokemonService.getPokemon(this.idPokemon? this.idPokemon:1).subscribe(poke => this.pokemon = poke);   
  }
  goBack(): void{
    this.location.back();
  }
  launchAudio(): void{
    var audio = new Audio("../../../assets/audio/"+this.idPokemon+".mp3");
    audio.play();
    
  }
}
