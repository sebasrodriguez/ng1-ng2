class UserService {
    public getUsers(): Array<any> {
        return [
            { name: "Sebastian" },
            { name: "Francisco" }
        ];
    }
}

angular.module("app.user").service("userService", UserService);