import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { map, catchError, debounceTime } from "rxjs/operators";
import { ConfigService } from "../config/config.service";

@Injectable({
  providedIn: "root"
})
export class DataContextService {
  constructor(private http: HttpClient) {}

  httpGet(
    url: string,
    parameters?: Object[],
    secure: boolean = true,
    media: number = 1
  ): Observable<any> {
    let observable: any;
    const headers = new HttpHeaders();
    this.addContentTypeHeader(headers, 1);
    this.addAcceptHeader(headers);
    this.addAccessControlHeader(headers);
    url =
      (media == 1 ? ConfigService.apiUrl : ConfigService.baseImageUrl) + url;

    observable = this.http
      .get(url, { headers: headers })
      .pipe(map(response => response));
    return observable;
  }

  addContentTypeHeader(headers: any, type: number = 0) {
    headers.append(
      "Content-Type",
      type === 1 ? "application/x-www-form-urlencoded" : "application/json"
    );
    return headers;
  }

  addAcceptHeader(headers, type: number = 0) {
    headers.append(
      "Accept",
      type === 2 ? "*/*" : type === 1 ? "application/xml" : "application/json"
    );
  }

  composeUrl(url: string): string {
    url = url.indexOf("http") === 0 ? url : `./${url}`;
    return url.replace(/(http?:\/\/)|(\/)+/g, "$1$2");
  }

  addAccessControlHeader(headers: any): any {
    headers.append(
      "Access-Control-Allow-Origin",
      this.composeUrl(`${location.origin}/${location.pathname}`)
    );
    return headers;
  }
}
