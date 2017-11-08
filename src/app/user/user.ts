export class User {
    id: string;
    username: string;
    email: string;
    lastLogin: Date;

    constructor(
        id: string,
        username: string,
        email: string,
        lastLogin: string
    )
    {
        this.id = id;
        this.username = username;
        this.email = email;
        this.lastLogin = new Date(lastLogin);
    }
}