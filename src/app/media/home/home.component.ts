// Core
import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
// Rxjs
import { Observable, of } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
  map
} from "rxjs/operators";
//
import { isUndefined } from "util";
// Services
import { MediaService } from "../media.service";
import { ConfigService } from "src/app/config/config.service";
// Models
import { Media, PopularMedia, SearchResult } from "../media.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  imagePath = "";
  searchText = "";
  // Observables
  popularMovies$: Observable<PopularMedia>;
  selectedMovies$: Observable<Media>;

  constructor(private mediaService: MediaService, private router: Router) {}

  ngOnInit() {
    this.imagePath = ConfigService.mediumImageUrl;
    this.popularMovies$ = this.mediaService.popularMovies$;
    this.selectedMovies$ = this.mediaService.popularMovies$;
  }

  // Format of movie name in search results
  formatter = (movieSearchResult: SearchResult) => {
    if (movieSearchResult)
      return (
        movieSearchResult.name +
        " (" +
        (movieSearchResult.release_date
          ? movieSearchResult.release_date.getFullYear()
          : "") +
        ") "
      );
    return "";
  };
  //on Selected
  onSelected(movieId: number) {
    this.router.navigate([`details/${movieId}`]);
  }
  // Search Movie
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.mediaService.searchMovie(term).pipe(
          map(res => {
            return (<any>res).map(result => {
              let date = new Date(result["release_date"]);
              return new SearchResult({
                name: result["original_title"],
                id: result["id"],
                release_date: date
              });
            });
          }),
          catchError(() => {
            return of([]);
          })
        )
      )
    );
  // Select Search Item
  selectMovieItem(item) {
    if (!isUndefined(item)) {
      this.router.navigate([`details/${item.item.id}`]);
    }
  }
}
