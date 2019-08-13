import { Injectable } from "@angular/core";
// rxjs
import { BehaviorSubject, combineLatest, Observable, of } from "rxjs";
import { map, shareReplay, isEmpty } from "rxjs/operators";
// Services
import { DataContextService } from "../common/datacontext.service";
import { ConfigService } from "../config/config.service";

@Injectable({
  providedIn: "root"
})
export class MediaService {
  // Constants
  popularMoviesUrl = `movie/popular?api_key=${
    ConfigService.apiKey
  }language=en-US`;
  searchUrl = `search/movie?include_adult=false&page=1&language=en-US&api_key=${
    ConfigService.apiKey
  }&query=`;

  constructor(private dataContextService: DataContextService) {}
  // Movies
  popularMovies$ = this.dataContextService.httpGet(this.popularMoviesUrl);
  // Search Movie
  searchMovie(searchtext: string) {
    if (searchtext === "") return of([]);
    return this.dataContextService
      .httpGet(this.searchUrl + encodeURIComponent(searchtext))
      .pipe(map(searchresults => searchresults["results"]));
  }
  // Movie Details by movie id
  getMovieDetails(movieId: number) {
    return this.dataContextService.httpGet(
      `movie/${movieId}?language=en-US&api_key=${ConfigService.apiKey}`
    );
  }
}
