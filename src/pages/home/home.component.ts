import { Component } from '@angular/core';
import { FavoriteService } from '../../service/favoriteService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private favoriteService: FavoriteService) { }


}
