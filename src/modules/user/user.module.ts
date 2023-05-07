import { Module } from '@nestjs/common';
import { UserService } from './domain/services/user.service';
import { CreateUserUseCase } from './domain/use-cases/create-user.use-case';
import { FindUsersUseCase } from './domain/use-cases/find-users.use-case';
import { UserController } from './presentation/controllers/user.controller';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, CreateUserUseCase, FindUsersUseCase],
    exports: [],
})
export class UserModule {}
