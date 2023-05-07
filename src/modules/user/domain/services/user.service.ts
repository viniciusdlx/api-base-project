import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from '../use-cases/create-user.use-case';
import { FindUsersUseCase } from '../use-cases/find-users.use-case';

@Injectable()
export class UserService {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly findUsersUseCase: FindUsersUseCase,
    ) {}

    async find() {
        return await this.findUsersUseCase.execute();
    }
}
