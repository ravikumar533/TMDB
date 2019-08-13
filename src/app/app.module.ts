import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
/** Components */
import { AppComponent } from "./app.component";
import { HomeComponent } from "./media/home/home.component";
import { DetailsComponent } from "./media/details/details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
/** services */
import { MediaService } from "./media/media.service";
import { DataContextService } from "./common/datacontext.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbTypeaheadModule
  ],
  providers: [MediaService, DataContextService],
  bootstrap: [AppComponent]
})
export class AppModule {}
