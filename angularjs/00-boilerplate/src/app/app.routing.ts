import * as angular from "angular"
import { StateProvider, Ng1StateDeclaration, UrlRouterProvider } from "@uirouter/angularjs"

export const routing = (
	$locationProvider: angular.ILocationProvider,
	$stateProvider: StateProvider,
	$urlRouterProvider: UrlRouterProvider
) => {
	"ngInject";

	$locationProvider.html5Mode({
		enabled: false,
	});

	$stateProvider
	.state("home", <Ng1StateDeclaration>{
		url: "/home",
		views: {
			"content@": { template: "<peliculalist></peliculalist>" },
		},
	})
	.state("peliculaedit", <Ng1StateDeclaration>{
		url: "/peliculaedit/{id:int}",
		views: {
			"content@": { template: "<peliculalistedit></peliculalistedit>" },
		}
	})
	.state("peliculacreate", <Ng1StateDeclaration>{
		url: "/peliculaedit",
		views: {
			"content@": { template: "<peliculalistedit></peliculalistedit>" },
		}
	})
	;

	$urlRouterProvider.otherwise("/home");
};

routing.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];