import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film-service';
import { FilmDetailResponse } from '../../interfaces/film-detail-response';

@Component({
  imports: [],
  selector: 'app-film-item-page',
  styleUrl: './film-item-page.css',
  templateUrl: './film-item-page.html',
})
export class FilmItemPage {
  private filmService = inject(FilmService);
  private route = inject(ActivatedRoute);
  film = signal<FilmDetailResponse | undefined>(undefined);

  constructor() {
    this.route.params.subscribe(params => {
      const id = params['id'];
    });
  }
}