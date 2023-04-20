import * as angular from "angular";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { routing } from "./app.routing";
import { ClientListComponent } from "./pages/client-list/client-list.component";

angular
	.module("app", ["ui.router"])
	.config(routing)
	.component("app", AppComponent)
	.component("login", LoginComponent)
	.component("clientlist", ClientListComponent)
	;
