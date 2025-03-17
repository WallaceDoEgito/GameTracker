import { Routes } from '@angular/router';
import { GameMoreDetailComponent } from './src/Pages/game-more-detail/game-more-detail.component';
import { GameMainPageComponent } from './src/Pages/game-main-page/game-main-page.component';

export const routes: Routes = [
    {path:'', component: GameMainPageComponent},
    {path:'game/:id', component: GameMoreDetailComponent},
    {path:'**', redirectTo:''}
];
