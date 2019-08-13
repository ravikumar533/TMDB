import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  static applicationName = "The Movie Database";
  static loginUrl = environment.urlPath;
  static apiUrl = environment.apiPath;
  static baseImageUrl = environment.imagePath;
  static smallImageUrl = `${environment.imagePath}w185`;
  static mediumImageUrl = `${environment.imagePath}w342`;
  static largeImageUrl = `${environment.imagePath}original`;
  static apiKey = environment.apiKey;
}
