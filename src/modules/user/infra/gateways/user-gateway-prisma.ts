import { PrismaService } from 'src/modules/prisma/prisma.service';
import { UserGatewayInterface } from './user-gateway-interface';

export class UserGatewayPrisma implements UserGatewayInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async create() {
    throw new Error('Method not implemented.');
  }
}
