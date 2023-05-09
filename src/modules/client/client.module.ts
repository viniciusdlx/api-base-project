import { Module } from '@nestjs/common';
import { ClientService } from './domain/services/client.service';
import { CreateClientUseCase } from './domain/use-cases/create-client.use-case';
import { ClientGatewayPrisma } from './infra/gateways/client-gateway-prisma';
import { ClientController } from './presentation/controllers/client.controller';

const IClientGateway = {
    provide: 'ClientGatewayInterface',
    useExisting: ClientGatewayPrisma,
};

@Module({
    imports: [],
    controllers: [ClientController],
    providers: [
        ClientService,
        IClientGateway,
        ClientGatewayPrisma,
        CreateClientUseCase,
    ],
    exports: [ClientService, IClientGateway, ClientGatewayPrisma],
})
export class ClientModule {}
