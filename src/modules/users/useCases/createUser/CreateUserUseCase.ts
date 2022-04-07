import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const alreadyExistsName = this.usersRepository.findByEmail(email);
    if (alreadyExistsName) {
      throw new Error("Email existente");
    }
    const newUser = this.usersRepository.create({ email, name });
    return newUser;
  }
}

export { CreateUserUseCase };
