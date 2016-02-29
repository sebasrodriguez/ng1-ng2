import {upgradeAdapter} from "../upgrade-adapter";
import UserService from "./services/user.service";
import UserList from "./components/list/list";
import {UserDetailComponent} from "./components/detail/detail";

export default angular.module("app.user", [
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

angular.module("app.user")
    .service("userService", UserService)
    .directive("userList", UserList)
    .directive("userDetail", <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(UserDetailComponent));