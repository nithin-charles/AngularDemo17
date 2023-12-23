import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonDisplayerComponent } from "./pokemon-displayer/pokemon-displayer.component";
import { HttpClientModule } from '@angular/common/http';
import { PokemonServiceService } from './pokemon-service/pokemon-service.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PokemonDisplayerComponent, HttpClientModule ],
    providers:[PokemonServiceService]
})
export class AppComponent {
}
