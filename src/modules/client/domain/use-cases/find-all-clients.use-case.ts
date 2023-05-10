import { Inject } from '@nestjs/common';
import { Client } from '@prisma/client';
import { ClientGatewayInterface } from './../../infra/gateways/client-gateway-interface';

export class FindAllClientsUseCase {
    constructor(
        @Inject('ClientGatewayInterface')
        private readonly clientGateway: ClientGatewayInterface,
    ) {}

    async execute(): Promise<Client[]> {
        return await this.clientGateway.findAll();
    }
}
