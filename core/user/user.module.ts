angular.module("app.user", [
    "ui.router"
]).config(function($stateProvider: any): void {
    $stateProvider.state("user", {
        url: "/user",
        template: `
        <div>
            User Module <a ui-sref='home'>go home</a>
        </div>
        <user-list></user-list>
        `
    });
});