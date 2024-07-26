import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

import { Pokemons } from '../../../interfaces/pokemons';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    CommonModule,
    ButtonModule,
    RouterOutlet,
    PaginatorModule
  ],
  providers:[
    PokemonService
  ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent {

  private _pokeService = inject(PokemonService);
  private router = inject(Router);

  pokemons: Pokemons[] = []
  totalRecords: number = 0;
  first: number = 0;
  next: number = 5;
  rows: number = 5;

  ngOnInit(): void {
    this.listPokemons();
  }

  listPokemons() {

    this._pokeService.listPokemos().subscribe({
        next: (data) =>{
         this.totalRecords = data.length;
         this.pokemons = data.slice(this.first, this.next);
        }
    })
  }

  pokemonDetail(id: string) {
    this.router.navigate(['/pokemons/'+id]);
  }


  toggleAddPopup(){

  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.next = event.first + event.rows;
    this.listPokemons();
  }







}
