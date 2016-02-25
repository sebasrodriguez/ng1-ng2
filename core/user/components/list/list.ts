class UserListDirective {
    restrict = "E";
    templateUrl = "core/user/components/list/list.html";
    controller = UserListController;
    controllerAs = "users";
    bindToController = true;
}

class UserListController {
    public list: any;

    constructor(private userService: UserService) {
        this.list = this.userService.getUsers();
    }
}

function directive() {
    return new UserListDirective();
}

angular.module("app.user").directive("userList", directive);
