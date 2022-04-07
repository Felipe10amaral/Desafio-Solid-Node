import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const ExistsUser = this.usersRepository.findById(user_id);

    if (!ExistsUser) {
      throw new Error("Usuario Inexistente");
    }

    return this.usersRepository.turnAdmin(ExistsUser);
  }
}

export { TurnUserAdminUseCase };
