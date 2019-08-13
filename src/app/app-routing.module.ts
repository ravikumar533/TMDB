import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./media/home/home.component";
import { DetailsComponent } from "./media/details/details.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details/:movieid", component: DetailsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
