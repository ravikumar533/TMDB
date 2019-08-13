import { TestBed } from "@angular/core/testing";

import { MediaService } from "./media.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataContextService } from "../common/datacontext.service";
import { PopularMedia } from "./media.model";
import { asyncData } from "src/testing";

describe("MediaService", () => {
  class MediaServiceSpy {
    populaMedia: PopularMedia = {
      page: 1,
      results: [
        {
          poster_path: "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
          adult: false,
          overview:
            "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
          release_date: new Date("2016-08-03"),
          genre_ids: [14, 28, 80],
          id: 297761,
          original_title: "Suicide Squad",
          original_language: "en",
          title: "Suicide Squad",
          backdrop_path: "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
          popularity: 48.261451,
          vote_count: 1466,
          video: false,
          vote_average: 5.91
        },
        {
          poster_path: "/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg",
          adult: false,
          overview:
            "The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.",
          release_date: new Date("2016-07-27"),
          genre_ids: [28, 53],
          id: 324668,
          original_title: "Jason Bourne",
          original_language: "en",
          title: "Jason Bourne",
          backdrop_path: "/AoT2YrJUJlg5vKE3iMOLvHlTd3m.jpg",
          popularity: 30.690177,
          vote_count: 649,
          video: false,
          vote_average: 5.25
        },
        {
          poster_path: "/hU0E130tsGdsYa4K9lc3Xrn5Wyt.jpg",
          adult: false,
          overview:
            "One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.",
          release_date: new Date("2016-06-02"),
          genre_ids: [28, 12, 35, 80, 9648, 53],
          id: 291805,
          original_title: "Now You See Me 2",
          original_language: "en",
          title: "Now You See Me 2",
          backdrop_path: "/zrAO2OOa6s6dQMQ7zsUbDyIBrAP.jpg",
          popularity: 29.737342,
          vote_count: 684,
          video: false,
          vote_average: 6.64
        }
      ],
      total_results: 19629,
      total_pages: 982
    };
    searchResult: PopularMedia = {
      page: 1,
      results: [
        {
          poster_path: "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
          adult: false,
          overview:
            "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
          release_date: new Date("2012-04-25"),
          genre_ids: [878, 28, 12],
          id: 24428,
          original_title: "The Avengers",
          original_language: "en",
          title: "The Avengers",
          backdrop_path: "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
          popularity: 7.353212,
          vote_count: 8503,
          video: false,
          vote_average: 7.33
        },
        {
          poster_path: "/7cJGRajXMU2aYdTbElIl6FtzOl2.jpg",
          adult: false,
          overview:
            'British Ministry agent John Steed, under direction from "Mother", investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.',
          release_date: new Date("1998-08-13"),
          genre_ids: [53],
          id: 9320,
          original_title: "The Avengers",
          original_language: "en",
          title: "The Avengers",
          backdrop_path: "/8YW4rwWQgC2JRlBcpStMNUko13k.jpg",
          popularity: 2.270454,
          vote_count: 111,
          video: false,
          vote_average: 4.7
        }
      ],
      total_results: 2,
      total_pages: 1
    };
    getMovieDetails = jasmine
      .createSpy("getMovieDetails")
      .and.callFake(() =>
        asyncData(Object.assign({}, this.populaMedia.results[0]))
      );
    searchMovie = jasmine
      .createSpy("searchMovie")
      .and.callFake(() =>
        asyncData(Object.assign({}, this.searchResult.results))
      );
  }
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [MediaService, DataContextService],
      imports: [HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: MediaService = TestBed.get(MediaService);
    expect(service).toBeTruthy();
  });
});
