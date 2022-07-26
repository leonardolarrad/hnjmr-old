class User {
  id: number;
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

    constructor(id: number, username: string, password: string, email: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}