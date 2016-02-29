import {Component, Inject} from "angular2/core";
import UserService from "../../services/user.service";

@Component({
    selector: "user-detail",
    templateUrl: "core/user/components/detail/detail.html",
    styleUrls: ["core/user/components/detail/detail.css"]
})
export class UserDetailComponent {
    constructor(private userService: UserService) {
    }

    public addUser(): void {
        this.userService.addUser({ name: Date.now().toString() });
    }
}