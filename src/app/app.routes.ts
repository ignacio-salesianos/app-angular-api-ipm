import { Routes } from '@angular/router';
import { VehiclesListPage } from './pages/vehicles-list-page/vehicles-list-page';
import { FilmListPage } from './pages/film-list-page/film-list-page';
import { FilmItemPage } from './pages/film-item-page/film-item-page';

export const routes: Routes = [
  { path: 'vehicles', component: VehiclesListPage },
  { path: 'films', component: FilmListPage },
  { path: 'film/:id', component: FilmItemPage },
  { path: '', pathMatch: 'full', redirectTo: '/vehicles' },
];