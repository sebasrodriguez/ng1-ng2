declare var angular;
angular.module("app", [
    "ui.router",
    "app.user"
]).config(function($stateProvider: any, $urlRouterProvider: any): void {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("home", { url: "/", template: "<div>home <a ui-sref='user'>go to user</a></div>" });
});