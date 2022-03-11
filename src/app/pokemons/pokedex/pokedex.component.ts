import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  my_id?: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  onPokemonSelected(id:number) {
    this.my_id = id;
  }
  
}
