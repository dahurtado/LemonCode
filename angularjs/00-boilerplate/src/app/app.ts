import * as angular from "angular";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { routing } from "./app.routing";
import { PeliculaListComponent } from "./pages/pelicula-list/pelicula-list.component";

angular
	.module("app", ["ui.router"])
	.config(routing)
	.component("app", AppComponent)
	.component("login", LoginComponent)
	.component("peliculalist", PeliculaListComponent)
	;
