import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service/pokemon-service.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-displayer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pokemon-displayer.component.html',
  styleUrl: './pokemon-displayer.component.css'
})
export class PokemonDisplayerComponent implements OnInit {

  public pokemon : string = '';
  public picUrl : string = '';
  public picPath: string = '';
  public defaultText : string  = 'Search for Pokemon';

  constructor(private _pokemonService: PokemonServiceService) {

  }

  ngOnInit() {

  }

  public search(pokemon:string){
    this._pokemonService.getPokemonDetails(this.pokemon).subscribe((data : any) =>{
      this.picUrl = data.forms[0].url;
      console.log(this.picUrl);
      this._pokemonService.getPokemonPicture(this.picUrl).subscribe((pictureUrl : any) =>{
        this.picPath = pictureUrl['sprites'].front_default;
        console.log(this.picPath);
      })
    });
  }

}
