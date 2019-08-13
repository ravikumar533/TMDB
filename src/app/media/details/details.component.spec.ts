import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailsComponent } from "./details.component";
import { MediaService } from "../media.service";
import { Location } from "@angular/common";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SpyLocation } from "@angular/common/testing";
import {
  ActivatedRoute,
  ActivatedRouteStub,
  asyncData,
  click,
  newEvent
} from "../../../testing";
import { Media } from "../media.model";
import { RouterTestingModule } from "@angular/router/testing";

let activatedRoute: ActivatedRouteStub;
let component: DetailsComponent;
let fixture: ComponentFixture<DetailsComponent>;
let location: Location;

describe("DetailsComponent", () => {
  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });
  beforeEach(() =>
    activatedRoute.setParamMap({ snapshot: { paramMap: { movieid: 550 } } })
  );
  class MediaServiceSpy {
    movieDetails: Media = {
      adult: false,
      backdrop_path: "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
      id: 550,
      original_language: "en",
      original_title: "Fight Club",
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      popularity: 0.5,
      poster_path: null,
      title: "Fight Club",
      video: false,
      genre_ids: [],
      vote_average: 7.8,
      vote_count: 3439,
      release_date: null
    };
    getMovieDetails = jasmine
      .createSpy("getMovieDetails")
      .and.callFake(() => asyncData(Object.assign({}, this.movieDetails)));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        { provide: MediaService, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        },
        {
          provide: Location,
          useValue: SpyLocation
        }
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .overrideComponent(DetailsComponent, {
        set: {
          providers: [{ provide: MediaService, useClass: MediaServiceSpy }]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
