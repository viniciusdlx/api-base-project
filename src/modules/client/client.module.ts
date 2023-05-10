import { Module } from '@nestjs/common';
import { ClientEvents } from './domain/events/client.events';
import { ClientService } from './domain/services/client.service';
import { CreateClientUseCase } from './domain/use-cases/create-client.use-case';
import { FindAllClientsUseCase } from './domain/use-cases/find-all-clients.use-case';
import { ClientGateway } from './infra/gateways/client-gateway';
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
        ClientGateway,
        ClientEvents,
        CreateClientUseCase,
        FindAllClientsUseCase,
    ],
    exports: [ClientService, IClientGateway, ClientGatewayPrisma],
})
export class ClientModule {}
