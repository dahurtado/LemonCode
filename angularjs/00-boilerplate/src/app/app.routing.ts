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
			"content@": { template: "<login></login>" },
		},
	})
	.state("peliculalist", <Ng1StateDeclaration>{
		url: "/peliculalist",
		views: {
			"content@": { template: "<peliculalist></peliculalist>" },
		}
	})
	;

	$urlRouterProvider.otherwise("/home");
};

routing.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];