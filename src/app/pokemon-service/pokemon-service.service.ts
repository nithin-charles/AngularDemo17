import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {

  private readonly _http = inject(HttpClient);

  public getPokemonDetails(pokemonName: string): Observable<any> {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName + '/';
    return this._http.get<any>(url);
  }

  public getPokemonPicture(picUrl: string): Observable<any> {
    return this._http.get<any>(picUrl);
  }

}
