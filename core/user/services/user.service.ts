export default class UserService {
    private users: Array<any> = [
        { name: "Sebastian" },
        { name: "Francisco" }];

    public getUsers(): Array<any> {
        return this.users;
    }

    public addUser(user: any) {
        this.users.push(user);
    }
}