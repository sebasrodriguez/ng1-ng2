import UserService from "../../services/user.service";

export default function userListComponent() {
    return {
        restrict: "E",
        templateUrl: "core/user/components/list/list.html",
        controller: UserListController,
        controllerAs: "users",
        bindToController: true
    };
}

class UserListController {
    public list: any;

    constructor(private userService: UserService) {
        this.list = this.userService.getUsers();
    }
}