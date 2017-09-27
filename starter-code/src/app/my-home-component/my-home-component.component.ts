import { Component, OnInit, Input } from '@angular/core';
import { Cinema } from '../services/Cinema.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [Cinema]
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<Object> = [];
  constructor(private cinema: Cinema) { }

  ngOnInit() {
    this.movies = this.cinema.getMovies();
  }


}
