import * as angular from "angular";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { PeliculaListComponent } from "./pages/pelicula-list/pelicula-list.component";
import { PeliculaListResultComponent } from "./pages/pelicula-list/result/pelicula-list-result.component";
import { PeliculaListCardComponent } from "./pages/pelicula-list/card/pelicula-list-card.component";
import { PeliculaApiService } from "./pages/pelicula-list/pelicula.service";
import { PeliculaListEditComponent } from "./pages/pelicula-list/edit/pelicula-list.edit.component";

angular
	.module("app", ["ui.router", "toastr", "ngMessages"])
	.config(routing)
	.component("app", AppComponent)
	.component("peliculalist", PeliculaListComponent)
	.component("peliculalistresult", PeliculaListResultComponent)
	.component("peliculalistcard", PeliculaListCardComponent)
	.component("peliculalistedit", PeliculaListEditComponent)
	.service("peliculaApiService", PeliculaApiService)
	;
