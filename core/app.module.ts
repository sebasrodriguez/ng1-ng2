import { UpgradeAdapter } from "angular2/upgrade";
import userModule from "./user/user.module";

export default angular.module("app", [
    "ui.router",
    userModule.name
]).config(function($stateProvider: any, $urlRouterProvider: any): void {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("home", { url: "/", template: "<div>home <a ui-sref='user'>go to user</a></div>" });
});

const upgradeAdapter = new UpgradeAdapter();
upgradeAdapter.bootstrap(document.documentElement, ["app"]);