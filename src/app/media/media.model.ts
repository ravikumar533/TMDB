// Popular Media Result Model
export interface PopularMedia {
  page: number;
  total_results: number;
  total_pages: number;
  results: Media[];
}
// TV or Movies
export interface Media {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: any;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
}
// Search Results
export class SearchResult {
  id: string;
  name: string;
  release_date: Date;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.name = (obj && obj.name) || null;
    this.release_date = (obj && obj.release_date) || null;
  }
}
