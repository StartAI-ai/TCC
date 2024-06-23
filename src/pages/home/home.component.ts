import { Component } from '@angular/core';
import { FavoriteService } from '../../service/favoriteService';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private favoriteService: FavoriteService) { }

  items = [
    { id: 1, name: 'Jogo da Memória',imageUrl: '../../assets/img/capas/memoria.png', rota:'/jogo-memoria'},
    { id: 2, name: 'Jogo da Velha',imageUrl: '../../assets/img/capas/velha.png' },

  ];

}
