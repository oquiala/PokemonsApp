import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from '../interfaces/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  listPokemos(): Observable<Pokemons[]>{
    return this.http.get<Pokemons[]>('http://localhost:3000/pokemons')
  }

  getPokemos(id:string): Observable<Pokemons>{
    return this.http.get<Pokemons>('http://localhost:3000/pokemons/' + id)
  }





}
