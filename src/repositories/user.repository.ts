import Api from "./core";

interface User {
  id: number;
  name: string;
  email: string;
}

class User extends Api {
  async getAllUsers() {
    return this.get<User[]>("users");
  }

  async getUserById(id: number) {
    return this.get<User>(`users/${id}`);
  }

  async createUser(user: User) {
    return this.post<User>("users", user);
  }

  async updateUser(user: User) {
    return this.put<User>(`users/${user.id}`, user);
  }

  async deleteUser(id: number) {
    return this.delete(`users/${id}`);
  }
}

const UserRepository = new User("Htt");
export default UserRepository;
