import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { PokemonService } from '../../../services/pokemon.service';
import { Pokemons } from '../../../interfaces/pokemons';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    PanelModule,
    CommonModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {

  id!: string
  poke!: Pokemons

  private _location = inject(Location);
  private aRoute = inject(ActivatedRoute);
  private _pokeService = inject(PokemonService);

  constructor() {
    this.id = String(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {

    this._pokeService.getPokemos(this.id).subscribe({
        next: (data) =>{
         this.poke = data
        }
    })
  }

  Volver() {
    this._location!.back();
  }




}
