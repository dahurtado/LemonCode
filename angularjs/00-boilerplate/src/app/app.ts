import * as angular from "angular";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { routing } from "./app.routing";
import { PeliculaListComponent } from "./pages/pelicula-list/pelicula-list.component";
import { PeliculaListSearchComponent } from "./pages/pelicula-list/search/pelicula-list.search.component";
import { PeliculaListResultComponent } from "./pages/pelicula-list/result/pelicula-list-result.component";
import { PeliculaListCardComponent } from "./pages/pelicula-list/card/pelicula-list-card.component";
import { PeliculaApiService } from "./pages/pelicula-list/pelicula.service";

angular
	.module("app", ["ui.router", "toastr"])
	.config(routing)
	.component("app", AppComponent)
	.component("login", LoginComponent)
	.component("peliculalist", PeliculaListComponent)
	.component("peliculalistsearch", PeliculaListSearchComponent)
	.component("peliculalistresult", PeliculaListResultComponent)
	.component("peliculalistcard", PeliculaListCardComponent)
	.service("peliculaApiService", PeliculaApiService)
	;
