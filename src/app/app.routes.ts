import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { MemoriaComponent } from '../pages/jogos/memoria/memoria.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'jogo-memoria', component: MemoriaComponent },

];
