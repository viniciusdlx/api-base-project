import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async find() {
        try {
            return await this.userService.find();
        } catch (error) {
            console.log('error.message -> ', error.message);
        }
    }
}
