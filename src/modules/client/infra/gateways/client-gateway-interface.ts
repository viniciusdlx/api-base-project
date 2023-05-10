import { Client } from '@prisma/client';

export interface ClientGatewayInterface {
    create(client: Client): Promise<Client>;
    findAll(): Promise<Client[]>;
}
