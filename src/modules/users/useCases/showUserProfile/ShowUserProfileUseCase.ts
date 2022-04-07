import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userVerify = this.usersRepository.findById(user_id);
    if (!userVerify) {
      throw new Error("Usuario inxistente");
    }

    return this.usersRepository.findById(user_id);
  }
}

export { ShowUserProfileUseCase };
