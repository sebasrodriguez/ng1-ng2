import UserService from "./services/user.service";
import UserList from "./components/list/list";

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
    .directive("userList", UserList);