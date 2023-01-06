import User from "../model/user.model";
import UserRepository from "../repository/user.repository";

export default class UserService {
  #repo: UserRepository;

  constructor(repo: UserRepository) {
    this.#repo = repo;
  }

  getAll = (): Promise<User[]> => {
    return this.#repo.getAll();
  };
}
