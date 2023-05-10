import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { ClientGatewayInterface } from './client-gateway-interface';

@Injectable()
export class ClientGatewayPrisma implements ClientGatewayInterface {
    constructor(private readonly prisma: PrismaService) {}

    async create(client: Client): Promise<Client> {
        console.log('client -> ', client);
        return await this.prisma.client.create({
            data: {
                ...client,
            },
        });
    }

    async findAll(): Promise<Client[]> {
        return await this.prisma.client.findMany({
            orderBy: {
                id: 'desc',
            },
        });
    }
}
