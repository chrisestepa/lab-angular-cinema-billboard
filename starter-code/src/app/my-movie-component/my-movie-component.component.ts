import { Component, OnInit } from '@angular/core';
import { Cinema } from '../services/Cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [Cinema]
})
export class MyMovieComponentComponent implements OnInit {
  movieId: number;
  film: Object = {};
  constructor(private route: ActivatedRoute, private cinema: Cinema) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
      this.showOneMovie();
  }

  showOneMovie() {
    this.film = this.cinema.getMovie(this.movieId);
  }

}
