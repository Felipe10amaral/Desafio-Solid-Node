import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const verifyUser = this.usersRepository.findById(user_id);
    if (verifyUser.admin === false) {
      throw new Error("Usuario sem permissão");
    }

    if (!verifyUser) {
      throw new Error("Usuario inexistente");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
