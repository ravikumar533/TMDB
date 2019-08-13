//core
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
//rxjs
import { Observable } from "rxjs";
// Services
import { MediaService } from "../media.service";
import { ConfigService } from "src/app/config/config.service";
// Models
import { Media } from "../media.model";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  movie$: Observable<Media>;
  movieId: number;
  searchText: string;
  imagePath = ConfigService.mediumImageUrl;
  backgroundImagePath = ConfigService.largeImageUrl;

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(pmap => {
      this.movie$ = this.mediaService.getMovieDetails(
        Number(pmap.get("movieid"))
      );
    });
  }
  back() {
    this.location.back();
  }
}
