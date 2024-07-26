import { Route } from '@angular/router'
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';



export default [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemons/:id', component: PokemonDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: PokemonsComponent },


] as Route[];
