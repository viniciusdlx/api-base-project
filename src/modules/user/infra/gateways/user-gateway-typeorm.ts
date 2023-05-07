import { Repository } from 'typeorm';
import { UsersModel } from '../models/user.model';
import { UserGatewayInterface } from './user-gateway-interface';

export class UserGatewayTypeOrm implements UserGatewayInterface {
  constructor(private readonly userRepository: Repository<UsersModel>) {}

  async create() {
    // this.userRepository.save();
    throw new Error('Method not implemented.');
  }
}
