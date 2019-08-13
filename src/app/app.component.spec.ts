import { TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { Component } from "@angular/core";
import { Routes, Router } from "@angular/router";
import { Location } from "@angular/common";
import { MediaService } from "./media/media.service";
import { DataContextService } from "./common/datacontext.service";

@Component({
  template: `
    Details
  `
})
export class DetailsComponent {}

@Component({
  template: `
    Home
  `
})
export class HomeComponent {}
@Component({
  template: `
    PageNotFoundComponent
  `
})
export class PageNotFoundComponent {}

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details", component: DetailsComponent },
  { path: "**", component: PageNotFoundComponent }
];
describe("AppComponent", () => {
  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        HomeComponent,
        DetailsComponent,
        PageNotFoundComponent
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TMDB'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("TMDB");
  });
  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(40);
    expect(done).toBeTruthy();
  }));
  it('navigate to "" redirects you to /', fakeAsync(() => {
    router.navigate(["/"]).then(() => {
      expect(location.path()).toBe("/");
    });
  }));
});
